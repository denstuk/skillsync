import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { AiQuizModule } from '../ai/quiz/ai.quiz.module';
import { AiQuizService } from '../ai/quiz/ai.quiz.service';

@Module({
  imports: [AiQuizModule],
  controllers: [QuizController],
  providers: [
    QuizService,
    {
      provide: 'IAiQuizService',
      useExisting: AiQuizService,
    },
  ],
})
export class QuizModule {}
