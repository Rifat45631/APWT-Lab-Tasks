import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ExamineeService } from './examinee.service';
import { check } from './dto/check.dto';

@Controller('examinee')
export class ExamineeController {
    constructor(private readonly examineeserve:ExamineeService) {}
    @Get()
    getHello()
    {
      return this.examineeserve.getHello();
    }

    @Post()
    getOut(@Body(new ValidationPipe()) check:check)
    {
      return this.examineeserve.getOut();
    }

}
