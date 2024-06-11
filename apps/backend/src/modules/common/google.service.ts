import { GenerativeModel, Part } from '@google/generative-ai';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleService {
  private readonly gemini: GenerativeModel;

  constructor(configService: ConfigService) {
    const apiKey = configService.get('GEMINI_API_KEY');
    this.gemini = new GenerativeModel(apiKey, { model: 'gemini-1.5-flash' });
  }

  async ask(prompt: string | (string | Part)[]): Promise<string> {
    const { response } = await this.gemini.generateContent(prompt);
    return response.text();
  }

  asBase64Image(base64Image: string): Part {
    return {
      inlineData: {
        data: base64Image,
        mimeType: 'image/png',
      },
    };
  }
}
