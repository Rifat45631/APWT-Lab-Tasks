import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ExamineeService } from './examinee.service';
import { CheckDto } from './dto/check.dto';

@Controller('examinee')
export class ExamineeController {
  constructor(private readonly examineeservice: ExamineeService) {}



  @Post()
  createDetails(@Body(new ValidationPipe()) dto: CheckDto) {
    return this.examineeservice.create(dto);
  }
}