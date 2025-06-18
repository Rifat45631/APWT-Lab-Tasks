//user.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User
{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ })
    username:string;

    @Column()
    age:number;

    @Column()
    institution:string;

    @Column()
    region:string;

    @Column({ unique: true })
    email:string;

    @Column()
    password:string;
    
    @Column({ default: false })
    isVerified: boolean;

    @Column({ type:"varchar",nullable: true })
    verificationToken: string| null;
}