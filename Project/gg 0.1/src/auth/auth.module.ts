import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'YourSecretKey',
      signOptions: { expiresIn: '1h' },
    }), 
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
