import { Expose } from 'class-transformer';

export class QuestionDto {
  @Expose()
  id: number;

  @Expose()
  question: string;

  @Expose()
  choices: string[];
}
