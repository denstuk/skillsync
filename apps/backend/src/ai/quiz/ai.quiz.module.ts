import { Module } from '@nestjs/common';
import { AiQuizService } from './ai.quiz.service';
import { GeminiModule } from '../../gemini/gemini.module';

@Module({
  imports: [GeminiModule],
  providers: [AiQuizService],
  exports: [AiQuizService],
})
export class AiQuizModule {}
