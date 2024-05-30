import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from './quiz.entity';
import { Question } from './question.entity';
import { GeminiService } from '../../gemini/gemini.service';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
    @Inject(GeminiService)
    private readonly geminiService: GeminiService,
  ) {}

  async createQuiz(topic: string, numQuestions: number) {
    const generatedQuiz = await this.geminiService.generateQuiz(
      topic,
      numQuestions,
    );
    const questions = generatedQuiz.sections.map((s) => ({
      question: s.question,
      choices: s.choices,
      answer: s.correctAnswer,
    }));
    const quiz = this.quizRepository.create({ topic, numQuestions, questions });
    return this.quizRepository.save(quiz);
  }

  async getNextQuestion(quizId: number): Promise<Question | undefined> {
    const quiz = await this.quizRepository.findOne({
      relations: ['questions'],
      where: { id: quizId },
    });
    if (!quiz) {
      throw new NotFoundException('Quiz not found');
    }
    const unansweredQuestions = quiz.questions.filter((q) => !q.answered);
    if (unansweredQuestions.length === 0) {
      return undefined;
    }
    return unansweredQuestions[0];
  }

  async submitAnswer(
    quizId: number,
    questionId: number,
    answer: string,
  ): Promise<boolean> {
    const question = await this.questionRepository.findOne({
      relations: ['quiz'],
      where: { id: questionId, quiz: { id: quizId } },
    });
    if (!question) {
      throw new NotFoundException('Question not found');
    }
    const isCorrect = question.answer === answer;
    question.answered = true;
    await this.questionRepository.save(question);
    return isCorrect;
  }
}
