import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Details } from './details.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExamineeService {
    constructor(@InjectRepository(Details) private myRepo: Repository<Details>){}
    getHello()
    {
        return " inserted ";
    }
    getOut()
    {
        return " inserted out ";
    }
}