import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const configureSwagger = (app: INestApplication): void => {
  const options = new DocumentBuilder()
    .setTitle('SkillSync API')
    .setDescription('The SkillSync API description')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/swagger', app, document);
};
