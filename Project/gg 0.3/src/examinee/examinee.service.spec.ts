import { InjectRepository } from '@nestjs/typeorm';
import { Details } from './details.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExamineeService {
  constructor(
    @InjectRepository(Details) private myRepo: Repository<Details>,
  ) {}

  async create(details: Details): Promise<Details> {
    return await this.myRepo.save(details); 
  }

  async findAll(): Promise<Details[]> {
    return await this.myRepo.find(); 
  }
}