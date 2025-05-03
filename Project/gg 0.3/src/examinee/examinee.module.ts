import { Module } from '@nestjs/common';
import { ExamineeController } from './examinee.controller';
import { ExamineeService } from './examinee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Details } from './details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Details])],  
  controllers: [ExamineeController],  
  providers: [ExamineeService],  
})
export class ExamineeModule {}