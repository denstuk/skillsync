export class CreateQuizDto {
  skill: string;
  level: string;
  topics: string[];
}

export class CreateQuizResponseDto {
  tasks: Task[];
}

export enum TaskType {
  SingleChoice = 'SingleChoice',
  MultipleChoice = 'MultipleChoice',
  Open = 'Open',
  Code = 'Code',
  FixCode = 'FixCode',
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

export class SubmitQuizDto {
  tasks: Task[];
  answers: string[];
}

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
