//auth.controller.ts
import { Body, Controller, Get, Post, Query, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body(new ValidationPipe()) dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  login(@Body(new ValidationPipe()) dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Get('verify-email')
  verifyEmail(@Query('token') token: string) {
    return this.authService.verifyEmail(token);

  }
}