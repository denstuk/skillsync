import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GoogleService } from '../../common/google.service';
import { TemplateService } from '../../common/template.service';
import { DiagramTaskController } from './diagram-task.controller';
import { DiagramTaskService } from './diagram-task.service';

@Module({
  imports: [ConfigModule],
  controllers: [DiagramTaskController],
  providers: [GoogleService, TemplateService, DiagramTaskService],
})
export class DiagramTaskModule {}
