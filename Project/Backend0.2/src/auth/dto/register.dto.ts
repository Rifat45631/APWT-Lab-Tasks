import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class RegisterDto{


    @IsEmail({},{message:'email is not valid'})
    @IsNotEmpty({message:'email is required'})
    email:string;

    @IsNotEmpty()
    @MinLength(6, {message:'password should be at least 6 characters long'})
    password:string;
}