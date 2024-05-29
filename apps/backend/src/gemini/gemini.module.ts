import { Module } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    {
      provide: 'GEMINI_MODEL',
      useFactory: async (config: ConfigService) => {
        const geminiApiKey = config.get('GEMINI_API_KEY');
        const genAI = new GoogleGenerativeAI(geminiApiKey);
        return genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      },
      inject: [ConfigService],
    },
    GeminiService,
  ],
  exports: [GeminiService],
})
export class GeminiModule {}
