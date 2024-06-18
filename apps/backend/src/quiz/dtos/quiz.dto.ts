import {
  IsEnum,
  IsString,
  IsArray,
  ArrayNotEmpty,
  ValidateNested,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateQuizDto {
  skill: string;
  level: string;
}

export enum TaskType {
  SingleChoice = 'SingleChoice',
  MultipleChoice = 'MultipleChoice',
  Open = 'Open',
  Code = 'Code',
  FixCode = 'FixCode',
}

export class BaseTask {
  @IsEnum(TaskType)
  type: TaskType;

  @IsString()
  question: string;
}

export class SingleChoiceTask extends BaseTask {
  @IsEnum(TaskType)
  type: TaskType.SingleChoice;

  @ArrayNotEmpty()
  @IsArray()
  @IsString({ each: true })
  options: string[];
}

export class MultipleChoiceTask extends BaseTask {
  @IsEnum(TaskType)
  type: TaskType.MultipleChoice;

  @ArrayNotEmpty()
  @IsArray()
  @IsString({ each: true })
  options: string[];
}

export class OpenTask extends BaseTask {
  @IsEnum(TaskType)
  type: TaskType.Open;
}

export class CodeTask extends BaseTask {
  @IsEnum(TaskType)
  type: TaskType.Code;
}

export class FixCodeTask extends BaseTask {
  @IsEnum(TaskType)
  type: TaskType.FixCode;

  @IsString()
  content: string;
}

export class Quiz {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BaseTask, {
    discriminator: {
      property: 'type',
      subTypes: [
        { value: SingleChoiceTask, name: 'SingleChoice' },
        { value: MultipleChoiceTask, name: 'MultipleChoice' },
        { value: OpenTask, name: 'Open' },
        { value: CodeTask, name: 'Code' },
        { value: FixCodeTask, name: 'FixCode' },
      ],
    },
    keepDiscriminatorProperty: true,
  })
  tasks: Task[];
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

class TaskResult {
  @ValidateNested()
  @Type(() => BaseTask, {
    discriminator: {
      property: 'type',
      subTypes: [
        { value: SingleChoiceTask, name: 'SingleChoice' },
        { value: MultipleChoiceTask, name: 'MultipleChoice' },
        { value: OpenTask, name: 'Open' },
        { value: CodeTask, name: 'Code' },
        { value: FixCodeTask, name: 'FixCode' },
      ],
    },
    keepDiscriminatorProperty: true,
  })
  task: Task;

  @IsString()
  answer: string;

  @IsString()
  message: string;
}

export class QuizResult {
  @IsNumber()
  totalScore: number;

  @IsNumber()
  score: number;

  @IsString()
  recommendations: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TaskResult)
  results: TaskResult[];
}
