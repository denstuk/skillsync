import { IsString } from 'class-validator';

export class DiagramAnswerDto {
  @IsString()
  readonly image: string; /* base64 */
}
