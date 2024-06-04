export interface QuizData {
  topic: string;
  numQuestions: number;
  questionType: QuestionType;
  subtopics?: string;
}
export type QuestionType = "coding" | "quiz";
export interface Question {
  question: string;
  options: string[];
  question_number: number;
  question_type: QuestionType;
  snippet_content?: string;
}

export interface AnswerResponse extends Question {
  previous_answer_correct: boolean;
  previous_answer_feedback: string;
  score?: number;
  total_questions?: number;
  feedback?: string;
  feedback_code?: string;
  message?: string;
}

export interface Message {
  role: string;
  content: string;
}
