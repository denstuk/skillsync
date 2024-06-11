import { NestFactory } from '@nestjs/core';
import { json } from 'express';
import { AppModule } from './app.module';

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule);

  app.use(json({ limit: '50mb' }));
  app.setGlobalPrefix('api');

  await app.listen(3000);
};

bootstrap().catch((error) => {
  console.error(error);
  process.exit(1);
});
