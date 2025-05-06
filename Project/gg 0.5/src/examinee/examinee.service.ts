//examinee.service.ts
import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Details } from './details.entity';
import { Entity, Repository } from 'typeorm';
import { CheckDto } from './dto/check.dto';

@Injectable()
export class ExamineeService {
  constructor(
    @InjectRepository(Details) private myRepo: Repository<Details>,
  ) {}

  async create(dto: CheckDto): Promise<{ message: string }> {
    try {
      const details = this.myRepo.create(dto);
      await this.myRepo.save(details);
      return { message: 'Data inserted successfully' };
    } catch (error) {
      if (error.code === '23505') {  
        throw new BadRequestException('Name is already taken');
      }
      throw new InternalServerErrorException('Failed to insert data');
    }
  }


}