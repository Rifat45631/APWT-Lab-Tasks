//app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ExamineeModule } from './examinee/examinee.module';
import { UserDetails } from './examinee/details.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';
import { MailerModule } from './mailer/mailer.module';
import { QuestionBankModule } from './question-bank/question-bank.module';
import { QuestionBank } from './question-bank/question-bank.entity';

@Module({
  imports: [ExamineeModule, 
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'examineeDB',
    entities: [
      UserDetails, User, QuestionBank
    ],
    synchronize: true,
    //logging: true,
  }), AuthModule, MailerModule, QuestionBankModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
