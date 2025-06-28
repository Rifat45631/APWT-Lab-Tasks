//auth.controller.ts
import { Body, Controller, Get, Post, Query, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ExamineeService } from 'src/examinee/examinee.service';
import { UserDetails } from 'src/examinee/details.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService,
    private readonly examineeService: ExamineeService,
  ) {}

  @Post('register')
  async register(@Body(new ValidationPipe()) dto: RegisterDto) {
  
    const newUser = await this.authService.register(dto);

    /*
    const userDetails = new UserDetails();
    userDetails.username = dto.username;
    userDetails.age = dto.age;
    userDetails.institution = dto.institution;
    userDetails.region = dto.region;
    userDetails.user = newUser; 

    await this.examineeService.createUserDetails(newUser.id, userDetails);
*/

return {
  user: newUser,
  message: 'Welcome to EduQuest! To activate your profile, please verify your mail first.',
};
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