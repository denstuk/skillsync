import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuizService } from './quiz.service';
import {
  CreateQuizDto,
  CreateQuizResponseDto,
  QuizResult,
  SubmitQuizDto,
} from './dtos/quiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  async getTopics(@Param('skill') skill, @Param('level') level) {
    return this.quizService.getTopics(skill, level);
  }

  @Post()
  async createQuiz(
    @Body() createQuizDto: CreateQuizDto,
  ): Promise<CreateQuizResponseDto> {
    const { skill, level, topics } = createQuizDto;
    const tasks = await this.quizService.getQuiz(skill, level, topics);
    return { tasks };
  }

  @Post('submit')
  async submitQuiz(@Body() submitQuizDto: SubmitQuizDto): Promise<QuizResult> {
    const { tasks, answers } = submitQuizDto;
    return this.quizService.submitQuiz(tasks, answers);
  }
}
