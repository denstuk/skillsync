import { Inject, Injectable } from '@nestjs/common';
import { QuizResult, Task } from './dtos/quiz.dto';
import { IAiQuizService } from './interfaces/ai.quiz.service.interface';

@Injectable()
export class QuizService {
  constructor(
    @Inject('IAiQuizService') private aiQuizService: IAiQuizService,
  ) {}

  async getTopics(skill: string, level: string): Promise<string[]> {
    return await this.aiQuizService.generateTopics(skill, level);
  }

  async getQuiz(
    skill: string,
    level: string,
    topics: string[],
  ): Promise<Task[]> {
    return await this.aiQuizService.generateQuiz(skill, level, topics);
  }

  async submitQuiz(tasks: Task[], answers: string[]): Promise<QuizResult> {
    return await this.aiQuizService.checkQuizResult(tasks, answers);
  }
}
