
import { Test, TestingModule } from '@nestjs/testing';
import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ExamineeService } from './examinee.service';
import { CheckDto } from './dto/check.dto';

@Controller('examinee')
export class ExamineeController{
  constructor(private readonly examineeService: ExamineeService) {}



  @Post()
  async createDetails(@Body(new ValidationPipe()) dto: CheckDto) {
    return this.examineeService.create(dto); 
}
}