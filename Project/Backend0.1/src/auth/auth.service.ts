import { Injectable ,BadRequestException, InternalServerErrorException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from './dto/register.dto';
import { User } from './user.entity';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';  


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService,
    ) {}

      async register(dto: RegisterDto) {
        try {
          const existing = await this.userRepository.findOne({ where: { email: dto.email } });
          if (existing) throw new BadRequestException('Email already exists');
/*
          const existingByName = await this.userRepository.findOne({ where: { name: dto.email } });
          if (existingByName) throw new BadRequestException('Name already exists');
*/
          const hash = await bcrypt.hash(dto.password, 10);
          const user = this.userRepository.create({ /*name: dto.name,*/email: dto.email, password: hash });
      
          console.log('Saving user:', user); 
      
          const savedUser = await this.userRepository.save(user);
          console.log('Saved user:', savedUser); 
      
          return savedUser; 
        } catch (err) {
          console.error('Register error:', err);
          throw new InternalServerErrorException('Failed to register user');
        }
      }
      

      async login(loginDto: LoginDto): Promise<string> {
        const { email, password } = loginDto;
    
      
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
          throw new BadRequestException('User not found');
        }
    
       
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          throw new BadRequestException('Incorrect password');
        }
    
        
        const payload = { email: user.email, sub: user.id };
        const token = this.jwtService.sign(payload); 
    
        return token; 
      }


}
