import { Inject, Injectable } from '@nestjs/common';
import { GenerativeModel } from '@google/generative-ai';

@Injectable()
export class GeminiService {
  constructor(
    @Inject('GEMINI_MODEL') private readonly model: GenerativeModel,
  ) {}

  async ask(message: string): Promise<string> {
    const result = await this.model.generateContent(message);
    const response = await result.response;
    return response
      .text()
      .trim()
      .replace(/^```json\s+|\s+```$/gm, '');
  }
}
