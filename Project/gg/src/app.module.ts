//app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ExamineeModule } from './examinee/examinee.module';
import { Details } from './examinee/details.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';
import { MailerModule } from './mailer/mailer.module';

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
      Details, User
    ],
    synchronize: true,
    //logging: true,
  }), AuthModule, MailerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
