import { Inject, Injectable } from '@nestjs/common';
import { IAiQuizService } from '../../quiz/interfaces/ai.quiz.service.interface';
import { Quiz, QuizResult, Task } from '../../quiz/dtos/quiz.dto';
import { GeminiService } from '../../gemini/gemini.service';
import { Prompts } from './prompts';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { retry } from '../../utils/retry.util';

const RETRY_COUNT = 4;

@Injectable()
export class AiQuizService implements IAiQuizService {
  private readonly prompts: Prompts = new Prompts();

  constructor(
    @Inject(GeminiService)
    private readonly geminiService: GeminiService,
  ) {}

  async generateTopics(skill: string, level: string): Promise<string[]> {
    return await retry<string[]>(async () => {
      const result = await this.geminiService.ask(
        this.prompts.generateTopics(skill, level),
      );
      const topics = JSON.parse(result) as string[];
      if (
        Array.isArray(topics) &&
        topics.every((item) => typeof item === 'string')
      ) {
        return topics;
      } else {
        throw Error('Topics are invalid');
      }
    }, RETRY_COUNT);
  }

  async generateQuiz(
    skill: string,
    level: string,
    topics: string[],
  ): Promise<Quiz> {
    return await retry<Quiz>(async () => {
      const result = await this.geminiService.ask(
        this.prompts.generateQuiz(skill, level, topics),
      );
      const tasks = JSON.parse(result) as Task[];
      const instance = plainToInstance(Quiz, { tasks });
      const errors = await validate(instance);
      if (errors.length === 0) {
        return instance;
      } else {
        throw Error('Quiz is invalid');
      }
    }, RETRY_COUNT);
  }

  async checkQuizResult(tasks: Task[], answers: string[]): Promise<QuizResult> {
    return await retry<QuizResult>(async () => {
      const result = await this.geminiService.ask(
        this.prompts.checkQuizResult(tasks, answers),
      );
      const quizResult = JSON.parse(result) as QuizResult;
      const instance = plainToInstance(QuizResult, quizResult);
      const errors = await validate(instance);
      if (errors.length === 0) {
        return instance;
      } else {
        throw Error('Quiz result is invalid');
      }
    }, RETRY_COUNT);
  }
}
