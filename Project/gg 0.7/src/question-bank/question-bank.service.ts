// question-bank.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuestionBank } from './question-bank.entity';

@Injectable()
export class QuestionBankService {
  constructor(
    @InjectRepository(QuestionBank)
    private questionBankRepo: Repository<QuestionBank>,
  ) {}

  async getAll(): Promise<QuestionBank[]> {
    return this.questionBankRepo.find();
  }
}
