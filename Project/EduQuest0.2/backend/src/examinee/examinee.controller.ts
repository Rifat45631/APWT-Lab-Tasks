//examinee.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { ExamineeService } from './examinee.service';
import { CheckDto } from './dto/check.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserDetails } from './details.entity';
import { Req } from '@nestjs/common';
@Controller('examinee')
export class ExamineeController {
  constructor(private readonly examineeService: ExamineeService) {}
  
  
  
  @UseGuards(JwtAuthGuard)
  @Get()
  async getUserDetails(@Req() req) {
    const userId = req.user.sub; 
    return this.examineeService.getUserDetails(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async updateUserDetails(
    @Req() req, 
    @Body() userDetails: Partial<UserDetails>,
  ) {
    const userId = req.user.sub;  
    return this.examineeService.updateUserDetails(userId, userDetails);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async deleteUserDetails(@Req() req) {
    const userId = req.user.sub;  
    return this.examineeService.deleteUserDetails(userId);
  }
}