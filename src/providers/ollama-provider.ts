/**
 * Ollama Provider for OpenMehdi
 * Supports DeepSeek-R1, Qwen 2.5, Llama 3.3, Phi-4, Mistral
 * @module providers/ollama-provider
 * @version 2026.2.27
 */

import { Ollama } from 'ollama';
import type { Message, ChatResponse } from 'ollama';

export interface OllamaConfig {
  host?: string;
  model: string;
  temperature?: number;
  topP?: number;
  maxTokens?: number;
  stream?: boolean;
}

export interface OllamaMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

/**
 * Recommended models for OpenMehdi 2026
 */
export const RECOMMENDED_MODELS = {
  DEEPSEEK_R1_14B: 'deepseek-r1:14b',
  DEEPSEEK_R1_32B: 'deepseek-r1:32b', 
  QWEN_14B: 'qwen2.5:14b',
  QWEN_32B: 'qwen2.5:32b',
  LLAMA_70B: 'llama3.3:70b',
  PHI_14B: 'phi4:14b',
  MISTRAL_22B: 'mistral-small:22b',
} as const;

/**
 * OllamaProvider - Modern LLM provider for local inference
 */
export class OllamaProvider {
  private client: Ollama;
  private config: Required<OllamaConfig>;

  constructor(config: OllamaConfig) {
    this.config = {
      host: config.host || process.env.OLLAMA_HOST || 'http://localhost:11434',
      model: config.model || process.env.OLLAMA_MODEL || RECOMMENDED_MODELS.DEEPSEEK_R1_14B,
      temperature: config.temperature ?? 0.7,
      topP: config.topP ?? 0.9,
      maxTokens: config.maxTokens ?? 4096,
      stream: config.stream ?? false,
    };

    this.client = new Ollama({ host: this.config.host });
  }

  /**
   * Check if model is available locally
   */
  async isModelAvailable(): Promise<boolean> {
    try {
      const models = await this.client.list();
      return models.models.some((m) => m.name === this.config.model);
    } catch (error) {
      console.error(`[OllamaProvider] Error checking model: ${error}`);
      return false;
    }
  }

  /**
   * Pull model if not available
   */
  async ensureModel(): Promise<void> {
    const available = await this.isModelAvailable();
    if (!available) {
      console.log(`[OllamaProvider] Pulling model: ${this.config.model}`);
      await this.client.pull({ model: this.config.model, stream: false });
    }
  }

  /**
   * Generate completion with conversation history
   */
  async chat(
    messages: OllamaMessage[],
    options?: Partial<OllamaConfig>
  ): Promise<ChatResponse> {
    await this.ensureModel();

    const response = await this.client.chat({
      model: options?.model || this.config.model,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
      options: {
        temperature: options?.temperature || this.config.temperature,
        top_p: options?.topP || this.config.topP,
        num_predict: options?.maxTokens || this.config.maxTokens,
      },
      stream: options?.stream || this.config.stream,
    });

    return response;
  }

  /**
   * Generate single completion (no history)
   */
  async generate(prompt: string, options?: Partial<OllamaConfig>): Promise<string> {
    await this.ensureModel();

    const response = await this.client.generate({
      model: options?.model || this.config.model,
      prompt,
      options: {
        temperature: options?.temperature || this.config.temperature,
        top_p: options?.topP || this.config.topP,
        num_predict: options?.maxTokens || this.config.maxTokens,
      },
      stream: false,
    });

    return response.response;
  }

  /**
   * Stream chat completions
   */
  async *chatStream(
    messages: OllamaMessage[],
    options?: Partial<OllamaConfig>
  ): AsyncGenerator<string, void, unknown> {
    await this.ensureModel();

    const stream = await this.client.chat({
      model: options?.model || this.config.model,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
      options: {
        temperature: options?.temperature || this.config.temperature,
        top_p: options?.topP || this.config.topP,
        num_predict: options?.maxTokens || this.config.maxTokens,
      },
      stream: true,
    });

    for await (const chunk of stream) {
      if (chunk.message?.content) {
        yield chunk.message.content;
      }
    }
  }

  /**
   * Get current configuration
   */
  getConfig(): Readonly<Required<OllamaConfig>> {
    return { ...this.config };
  }

  /**
   * List available models
   */
  async listModels(): Promise<string[]> {
    try {
      const models = await this.client.list();
      return models.models.map((m) => m.name);
    } catch (error) {
      console.error(`[OllamaProvider] Error listing models: ${error}`);
      return [];
    }
  }
}

/**
 * Factory function for quick setup
 */
export function createOllamaProvider(model?: keyof typeof RECOMMENDED_MODELS): OllamaProvider {
  const modelName = model ? RECOMMENDED_MODELS[model] : RECOMMENDED_MODELS.DEEPSEEK_R1_14B;
  return new OllamaProvider({ model: modelName });
}

/**
 * Example usage:
 * 
 * ```typescript
 * // DeepSeek-R1 for reasoning tasks
 * const deepseek = createOllamaProvider('DEEPSEEK_R1_14B');
 * const response = await deepseek.chat([{
 *   role: 'user',
 *   content: 'Explique la géophysique du Rif marocain'
 * }]);
 * 
 * // Qwen 2.5 for Arabic/Darija
 * const qwen = createOllamaProvider('QWEN_14B');
 * const darija = await qwen.generate('achkayn bghit nfhem darija');
 * ```
 */
