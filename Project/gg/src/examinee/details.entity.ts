//details.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Details
{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ unique: true })
    name:string;

    @Column()
    age:number;

    @Column()
    institute:string;

    @Column()
    region:string;


}