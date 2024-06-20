import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import {
  CreateQuizDto,
  Quiz,
  QuizResult,
  SubmitQuizDto,
} from './dtos/quiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  async createQuiz(@Body() createQuizDto: CreateQuizDto): Promise<Quiz> {
    const { skill, level } = createQuizDto;
    try {
      return await this.quizService.getQuiz(skill, level);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_GATEWAY);
    }
  }

  @Post('submit')
  async submitQuiz(@Body() submitQuizDto: SubmitQuizDto): Promise<QuizResult> {
    const { tasks, answers } = submitQuizDto;
    try {
      return await this.quizService.submitQuiz(tasks, answers);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_GATEWAY);
    }
  }
}
