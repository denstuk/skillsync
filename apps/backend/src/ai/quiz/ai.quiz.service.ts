import { Inject, Injectable } from '@nestjs/common';
import { IAiQuizService } from '../../quiz/interfaces/ai.quiz.service.interface';
import { QuizResult, Task } from '../../quiz/dtos/quiz.dto';
import { GeminiService } from '../../gemini/gemini.service';
import { Prompts } from './prompts';

@Injectable()
export class AiQuizService implements IAiQuizService {
  private readonly prompts: Prompts = new Prompts();

  constructor(
    @Inject(GeminiService)
    private readonly geminiService: GeminiService,
  ) {}

  async generateTopics(skill: string, level: string): Promise<string[]> {
    const result = await this.geminiService.ask(
      this.prompts.generateTopics(skill, level),
    );
    const json = JSON.parse(result) as string[];
    return json;
  }

  async generateQuiz(
    skill: string,
    level: string,
    topics: string[],
  ): Promise<Task[]> {
    const result = await this.geminiService.ask(
      this.prompts.generateQuiz(skill, level, topics),
    );
    const json = JSON.parse(result) as Task[];
    return json;
  }

  async checkQuizResult(tasks: Task[], answers: string[]): Promise<QuizResult> {
    const result = await this.geminiService.ask(
      this.prompts.checkQuizResult(tasks, answers),
    );
    const json = JSON.parse(result) as QuizResult;
    return json;
  }
}
