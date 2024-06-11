import { Module } from '@nestjs/common';
import { BinaryTaskModule } from './binary/binary-task.module';
import { DiagramTaskModule } from './diagram/diagram-task.module';

@Module({
  imports: [BinaryTaskModule, DiagramTaskModule],
})
export class TaskModule {}
