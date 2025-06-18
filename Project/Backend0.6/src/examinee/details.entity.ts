//details.entity.ts
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from 'src/auth/user.entity';

@Entity()
export class UserDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  age: number;

  @Column()
  institution: string;

  @Column()
  region: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
