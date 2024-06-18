import { Quiz, QuizResult, Task } from '../dtos/quiz.dto';

export interface IAiQuizService {
  generateTopics(skill: string, level: string): Promise<string[]>;

  generateQuiz(skill: string, level: string, topics: string[]): Promise<Quiz>;

  checkQuizResult(tasks: Task[], answers: string[]): Promise<QuizResult>;
}
