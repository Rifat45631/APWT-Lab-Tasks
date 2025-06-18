//question-bank.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { QuestionBankService } from './question-bank.service';
import { JwtAuthGuard } from 'src/examinee/jwt-auth.guard';

@Controller('question-bank')
export class QuestionBankController {
  constructor(private readonly questionBankService: QuestionBankService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllQuestions() {
    return this.questionBankService.getAll();
  }
}
