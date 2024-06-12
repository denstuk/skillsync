import { NestFactory } from '@nestjs/core';
import { json } from 'express';
import { AppModule } from './app.module';
import { configureSwagger } from './common/swagger';

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule, { cors: true });

  configureSwagger(app);

  app.use(json({ limit: '50mb' }));
  app.setGlobalPrefix('api');

  await app.listen(3000);
};

bootstrap().catch((error) => {
  console.error(error);
  process.exit(1);
});
