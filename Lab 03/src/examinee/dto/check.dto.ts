import { IsNotEmpty } from "class-validator";

export class check{
    @IsNotEmpty({message:'please fill the id'})
    id:string
    }