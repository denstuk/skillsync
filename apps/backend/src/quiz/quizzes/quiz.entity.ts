import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Question } from './question.entity';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  topic: string;

  @Column()
  numQuestions: number;

  @OneToMany(() => Question, (question) => question.quiz, { cascade: true })
  questions: Question[];
}
