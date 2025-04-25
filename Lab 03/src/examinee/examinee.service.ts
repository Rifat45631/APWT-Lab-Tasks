import { Injectable } from '@nestjs/common';

@Injectable()
export class ExamineeService {

    getHello()
    {
        return " inserted ";
    }
    getOut()
    {
        return " inserted out ";
    }
}