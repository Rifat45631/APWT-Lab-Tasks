//question-bank.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionBank } from './question-bank.entity';
import { QuestionBankController } from './question-bank.controller';
import { QuestionBankService } from './question-bank.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([QuestionBank]),
    JwtModule.register({
      secret: 'YourSecretKey', 
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [QuestionBankController],
  providers: [QuestionBankService, JwtStrategy],
})
export class QuestionBankModule {}
