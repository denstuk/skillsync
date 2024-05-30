import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { GeminiService } from './gemini/gemini.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(GeminiService) private readonly geminiService: GeminiService,
  ) {}

  @Get()
  async getHello() {
    return await this.geminiService.generateQuiz('Node.js', 3);
  }
}
