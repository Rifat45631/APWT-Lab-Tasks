//auth.module.ts
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { User } from './user.entity';
import { MailerModule } from 'src/mailer/mailer.module';
import { ExamineeModule } from 'src/examinee/examinee.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../question-bank/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'YourSecretKey',
      signOptions: { expiresIn: '1h' },
    }), MailerModule,ExamineeModule,
    PassportModule, JwtModule.register({ secret: process.env.JWT_SECRET, signOptions: { expiresIn: '1h' } })
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
  exports: [JwtStrategy],
})
export class AuthModule {}
