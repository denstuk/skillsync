import { Body, Controller, Post } from '@nestjs/common';
import { ComposerService } from './composer.service';
import { ComposerCreateDto } from './dtos/composer-create.dto';
import { ITask } from './types';

@Controller('quiz/composer')
export class ComposerController {
  constructor(private readonly composerService: ComposerService) {}

  @Post()
  async compose(@Body() dto: ComposerCreateDto): Promise<ITask[]> {
    return await this.composerService.compose(dto);
  }
}
