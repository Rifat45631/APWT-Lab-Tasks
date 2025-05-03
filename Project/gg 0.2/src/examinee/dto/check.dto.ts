import { IsNotEmpty, IsNumber, IsSemVer, IsString, isString } from "class-validator";

export class CheckDto {
    @IsNotEmpty({message: 'Name is required' })
    @IsString()
    name: string;
  
    @IsNotEmpty({message: 'Age is required' })
    @IsNumber()
    age: number;
  
    @IsNotEmpty({message: 'Institute is required' })
    @IsString()
    institute: string;
  
    @IsNotEmpty({message: 'Region is required' })
    @IsString()
    region: string;
  }