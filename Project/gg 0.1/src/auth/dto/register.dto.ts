import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class RegisterDto{

    @IsNotEmpty({message:'name is required'})
    name:string;

    @IsEmail({},{message:'email is not valid'})
    @IsNotEmpty({message:'email is required'})
    email:string;

    @IsNotEmpty()
    @MinLength(6, {message:'password should be at least 6 characters long'})
    password:string;
}