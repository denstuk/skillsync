import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateQuizDto } from './dtos/create-quiz.dto';
import { QuizService } from './quiz.service';
import { SubmitAnswerDto } from './dtos/submit-answer.dto';
import { Serialize } from '../../interceptors/serialize.interceptor';
import { QuestionDto } from './dtos/question.dto';

@Controller('quizzes')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  async createQuiz(@Body() createQuizDto: CreateQuizDto) {
    const quiz = await this.quizService.createQuiz(
      createQuizDto.topic,
      createQuizDto.numQuestions,
    );
    return { quizId: quiz.id };
  }

  @Serialize(QuestionDto)
  @Get('/:quizId/next-question')
  async getNextQuestion(@Param('quizId') quizId: number) {
    const question = await this.quizService.getNextQuestion(quizId);
    if (!question) {
      return null;
    }
    return question;
  }

  @Post('/:quizId/answer')
  async submitAnswer(
    @Param('quizId') quizId: number,
    @Body() submitAnswerDto: SubmitAnswerDto,
  ) {
    const isCorrect = await this.quizService.submitAnswer(
      quizId,
      submitAnswerDto.questionId,
      submitAnswerDto.answer,
    );
    return { correct: isCorrect };
  }
}
