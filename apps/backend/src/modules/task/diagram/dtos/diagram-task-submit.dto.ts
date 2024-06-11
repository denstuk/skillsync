import { Type } from 'class-transformer';
import { DiagramAnswerDto } from './diagram-answer.dto';
import { DiagramTaskDto } from './diagram-task.dto';

export class DiagramTaskSubmitDto {
  @Type(() => DiagramTaskDto)
  readonly task: DiagramTaskDto;

  @Type(() => DiagramAnswerDto)
  readonly answer: DiagramAnswerDto;
}
