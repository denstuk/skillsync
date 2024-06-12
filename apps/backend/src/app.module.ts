import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LogMiddleware } from './common/middlewares/log.middleware';
import { GeminiModule } from './gemini/gemini.module';
import { ComposerModule } from './modules/composer/composer.module';
import { TaskModule } from './modules/task/task.module';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    GeminiModule,
    QuizModule,
    TaskModule,
    ComposerModule,
    QuizModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('*');
  }
}
