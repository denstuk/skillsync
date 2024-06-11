import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GoogleService } from '../../common/google.service';
import { BinaryTaskController } from './binary-task.controller';
import { BinaryTaskService } from './binary-task.service';

@Module({
  imports: [ConfigModule],
  controllers: [BinaryTaskController],
  providers: [GoogleService, BinaryTaskService],
})
export class BinaryTaskModule {}
