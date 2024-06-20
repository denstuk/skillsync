import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GoogleService } from '../common/google.service';
import { TemplateService } from '../common/template.service';
import { RoadmapService } from './roadmap.service';

@Module({
  imports: [ConfigModule],
  providers: [GoogleService, TemplateService, RoadmapService],
  exports: [RoadmapService],
})
export class RoadmapModule {}
