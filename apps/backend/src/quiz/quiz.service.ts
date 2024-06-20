import { Inject, Injectable } from '@nestjs/common';
import { Quiz, QuizResult, Task } from './dtos/quiz.dto';
import { IAiQuizService } from './interfaces/ai.quiz.service.interface';

@Injectable()
export class QuizService {
  constructor(
    @Inject('IAiQuizService') private aiQuizService: IAiQuizService,
  ) {}

  async getQuiz(skill: string, level: string): Promise<Quiz> {
    const topics = await this.aiQuizService.generateTopics(skill, level);
    return await this.aiQuizService.generateQuiz(skill, level, topics);
  }

  async submitQuiz(tasks: Task[], answers: string[]): Promise<QuizResult> {
    return await this.aiQuizService.checkQuizResult(tasks, answers);
  }
}
