import { Injectable } from '@nestjs/common';
import { GoogleService } from '../common/google.service';
import { TemplateService } from '../common/template.service';
import { CREATE_ROADMAP_PROMPT_TEMPLATE } from './constants';
import { IRoadmap, IRoadmapCreate } from './types';

@Injectable()
export class RoadmapService {
  constructor(
    private readonly googleService: GoogleService,
    private readonly templateService: TemplateService,
  ) {}

  async create({ skill, level, topics }: IRoadmapCreate): Promise<IRoadmap> {
    const prompt = this.templateService.make(CREATE_ROADMAP_PROMPT_TEMPLATE, [
      skill,
      level,
      topics.join('\n'),
    ]);

    const response = this.parseResponse(await this.googleService.ask(prompt));
    console.log(response);

    const roadmap = JSON.parse(response) as IRoadmap;
    console.log(JSON.stringify(roadmap, null, 2));

    return roadmap;
  }

  private parseResponse(response: string): string {
    return response.replace(/```json/g, '').replace(/```/g, '');
  }
}
