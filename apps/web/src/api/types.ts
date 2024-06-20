export enum SkillLevel {
  Novice = "Novice",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
  Expert = "Expert",
}

export enum TaskType {
  SingleChoice = "SingleChoice",
  MultipleChoice = "MultipleChoice",
  Open = "Open",
  Code = "Code",
  FixCode = "FixCode",
  Diagram = "Diagram",
}

export interface IBaseTask {
  type: TaskType;
  question: string;
}

export interface ISingleChoiceTask extends IBaseTask {
  type: TaskType.SingleChoice;
  options: string[];
}

export interface IMultipleChoiceTask extends IBaseTask {
  type: TaskType.MultipleChoice;
  options: string[];
}

export interface IOpenTask extends IBaseTask {
  type: TaskType.Open;
}

export interface ICodeTask extends IBaseTask {
  type: TaskType.Code;
}

export interface IFixCodeTask extends IBaseTask {
  type: TaskType.FixCode;
  code: string;
}

export interface IDiagramTask extends IBaseTask {
  type: TaskType.Diagram;
}

export type Task =
  | ISingleChoiceTask
  | IMultipleChoiceTask
  | IOpenTask
  | ICodeTask
  | IFixCodeTask
  | IDiagramTask;

export interface ISingleChoiceAnswer {
  answer: string;
}

export interface IMultipleChoiceAnswer {
  answer: string[];
}

export interface IFreeTextAnswer {
  answer: string;
}

export interface ICodeAnswer {
  answer: string;
}

export interface IFixCodeAnswer {
  answer: string;
}

export interface IDiagramAnswer {
  image: string /* base64 */;
}

export type TaskAnswer =
  | ISingleChoiceAnswer
  | IMultipleChoiceAnswer
  | IFreeTextAnswer
  | ICodeAnswer
  | IFixCodeAnswer
  | IDiagramAnswer;

export interface ITaskResult {
  task: Task;
  answer: TaskAnswer;
  feedback: string;
  passed: boolean;
}
