//user.entity.ts
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
    
    @Column({ default: false })
    isVerified: boolean;

    @Column({ type:"varchar",nullable: true })
    verificationToken: string| null;
}