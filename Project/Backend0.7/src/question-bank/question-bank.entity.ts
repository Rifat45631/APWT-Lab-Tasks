// question-bank.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class QuestionBank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;

  @Column({ name: 'googleformlink' }) 
  googleFormLink: string;
}