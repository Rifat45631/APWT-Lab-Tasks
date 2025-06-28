// check.dto.ts
import { IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class CheckDto {
  @IsNotEmpty({ message: 'ID should not be empty' })
  @IsInt({ message: 'ID should be an integer' })
  @Min(1, { message: 'ID should be greater than or equal to 1' })
  id: number;

  @IsNotEmpty({ message: 'Name should not be empty' })
  name: string;

  @IsInt({ message: 'Age should be an integer' })
  @Min(18, { message: 'Age should be greater than or equal to 18' })
  @Max(100, { message: 'Age should be less than or equal to 100' })
  age: number;

  @IsNotEmpty({ message: 'Institute should not be empty' })
  institute: string;

  @IsNotEmpty({ message: 'Region should not be empty' })
  region: string;
}
