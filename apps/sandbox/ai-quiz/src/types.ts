export interface QuizData {
  topic: string;
  numQuestions: number;
}

export interface Question {
  question: string;
  options: string[];
  question_number: number;
}

export interface AnswerResponse extends Question {
  previous_answer_correct: boolean;
  previous_answer_feedback: string;
  score?: number;
  total_questions?: number;
  feedback?: string;
  message?: string;
}

export interface Message {
  role: string;
  content: string;
}
