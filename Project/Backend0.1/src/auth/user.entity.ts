import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User
{
    @PrimaryGeneratedColumn()
    id:number;



    @Column({ unique: true })
    email:string;

    @Column()
    password:string;
    
    /*How toalter table to add a new column in typeorm?
    @Column(  )
    name:string;
    */
}