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

export type Topic = string;

export enum SkillLevel {
  NOVICE = "NOVICE",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
  EXPERT = "EXPERT",
}
export enum TaskType {
  SingleChoice = "SingleChoice",
  MultipleChoice = "MultipleChoice",
  Open = "Open",
  Code = "Code",
  FixCode = "FixCode",
}

export interface BaseTask {
  type: TaskType;
  question: string;
}

export interface SingleChoiceTask extends BaseTask {
  type: TaskType.SingleChoice;
  options: string[];
}

export interface MultipleChoiceTask extends BaseTask {
  type: TaskType.MultipleChoice;
  options: string[];
}

export interface OpenTask extends BaseTask {
  type: TaskType.Open;
}

export interface CodeTask extends BaseTask {
  type: TaskType.Code;
}

export interface FixCodeTask extends BaseTask {
  type: TaskType.FixCode;
  content: string;
}

export type Task =
  | SingleChoiceTask
  | MultipleChoiceTask
  | OpenTask
  | CodeTask
  | FixCodeTask;

export interface Result {
  task: Task;
  answer: string;
  message: string;
}

export interface QuizResult {
  totalScore: number;
  score: number;
  recommendations: string;
  results: Result[];
}
export type Answer = string;
