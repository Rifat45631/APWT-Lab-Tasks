import { Injectable } from '@nestjs/common';
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
      throw new Error('Data insertion failed');
    }
  }


}