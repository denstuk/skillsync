import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { DiagramTaskService } from './diagram-task.service';
import { DiagramTaskSubmitDto } from './dtos/diagram-task-submit.dto';
import { DiagramTask, DiagramTaskResult } from './types';

@Controller('/quiz/diagram')
export class DiagramTaskController {
  constructor(private readonly diagramService: DiagramTaskService) {}

  @Post()
  @HttpCode(201)
  async create(): Promise<DiagramTask> {
    return this.diagramService.create();
  }

  @Post('submit')
  @HttpCode(201)
  async submit(@Body() dto: DiagramTaskSubmitDto): Promise<DiagramTaskResult> {
    return this.diagramService.submit(dto);
  }
}
