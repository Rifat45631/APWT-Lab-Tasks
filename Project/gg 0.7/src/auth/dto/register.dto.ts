//register.dto.ts
import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class RegisterDto{

    @IsNotEmpty({message: 'Name is required' })
    @IsString()
    username: string;
  
    @IsNotEmpty({message: 'Age is required' })
    @IsNumber()
    age: number;
  
    @IsNotEmpty({message: 'Institute is required' })
    @IsString()
    institution: string;
  
    @IsNotEmpty({message: 'Region is required' })
    @IsString()
    region: string;

    @IsEmail({},{message:'email is not valid'})
    @IsNotEmpty({message:'email is required'})
    email:string;

    @IsNotEmpty()
    @MinLength(6, {message:'password should be at least 6 characters long'})
    password:string;
}

    