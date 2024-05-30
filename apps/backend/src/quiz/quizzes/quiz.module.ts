import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { GeminiModule } from '../../gemini/gemini.module';
import { Quiz } from './quiz.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question.entity';

@Module({
  imports: [GeminiModule, TypeOrmModule.forFeature([Quiz, Question])],
  providers: [QuizService],
  controllers: [QuizController],
})
export class QuizModule {}
