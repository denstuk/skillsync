import { Module } from '@nestjs/common';
import { GoogleService } from '../common/google.service';
import { TemplateService } from '../common/template.service';
import { TaskModule } from '../task/task.module';
import { ComposerController } from './composer.controller';
import { ComposerService } from './composer.service';
import { RoadmapModule } from '../roadmap/roadmap.module';

@Module({
  imports: [TaskModule, RoadmapModule],
  controllers: [ComposerController],
  providers: [GoogleService, TemplateService, ComposerService],
})
export class ComposerModule {}
