import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeminiModule } from './gemini/gemini.module';
import { ComposerModule } from './modules/composer/composer.module';
import { TaskModule } from './modules/task/task.module';
import { Question } from './quiz/quizzes/question.entity';
import { Quiz } from './quiz/quizzes/quiz.entity';
import { QuizModule } from './quiz/quizzes/quiz.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Quiz, Question],
      synchronize: true,
    }),
    GeminiModule,
    QuizModule,
    TaskModule,
    ComposerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
