//auth.service.ts
import { Injectable ,BadRequestException, InternalServerErrorException, ConflictException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from './dto/register.dto';
import { User } from './user.entity';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';  
import { MailerService } from 'src/mailer/mailer.service';
import { randomBytes } from 'crypto';
import { ExamineeService } from 'src/examinee/examinee.service';
import { UserDetails } from 'src/examinee/details.entity';



@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService,
        private mailerService: MailerService,
        private examineeService: ExamineeService,
    ) {}

    async register(dto: RegisterDto) {
      console.log('Starting registration for:', dto.email);
    
      try {
/* -----when username is unique in user.entity.ts......... 
        const existingUserByUsername = await this.userRepository.findOne({ where: { username: dto.username } });
        if (existingUserByUsername) {
          console.log('Username already taken');
          throw new ConflictException('Username already taken');
        }
*/

        const existingUser = await this.userRepository.findOne({ where: { email: dto.email } });
    
        if (existingUser) {
          console.log('User already exists');
    
          if (!existingUser.isVerified) {
            console.log('User exists but is not verified. Sending new token...');
            const newToken = randomBytes(32).toString('hex');
            existingUser.verificationToken = newToken;
    
            await this.userRepository.save(existingUser);
    
            await this.mailerService.sendEmailVerification(existingUser.email, newToken);
    
            throw new BadRequestException('Email already registered but not verified. A new verification link has been sent.');
          } else {
            throw new BadRequestException('Email already exists');
          }
        }
    
        const hash = await bcrypt.hash(dto.password, 10);
        const verificationToken = randomBytes(32).toString('hex');
    
        console.log('Creating new user with token:', verificationToken);
    
        const user = this.userRepository.create({
          
          username: dto.username,  
          age: dto.age,            
          institution: dto.institution,  
          region: dto.region,   
          email: dto.email,
          password: hash,
          isVerified: false,
          verificationToken,
        });
        const savedUser = await this.userRepository.save(user);
        console.log('User saved to database.');
        
const userDetails = new UserDetails();
      userDetails.username = dto.username;
      userDetails.age = dto.age;
      userDetails.institution = dto.institution;
      userDetails.region = dto.region;
      userDetails.user = savedUser; 

      
      await this.examineeService.createUserDetails(savedUser.id, userDetails);
    
        await this.mailerService.sendEmailVerification(savedUser.email, verificationToken);
        console.log('Verification email sent.');
    
        return savedUser; 
    
      } catch (err) {
        console.error('Registration error occurred:', err);
        if (err instanceof BadRequestException || err instanceof ConflictException) {
          throw err;
        }
        throw new InternalServerErrorException('Failed to register user');
      }
    }
    
    
     
  

  async verifyEmail(token: string): Promise<string> {
    const user = await this.userRepository.findOne({ where: { verificationToken: token } });

    if (!user) {
      throw new BadRequestException('Invalid or expired token');
    }
    user.isVerified = true;
    user.verificationToken = null;
    await this.userRepository.save(user);

    return 'Email successfully verified!';
  }


      async login(loginDto: LoginDto): Promise<{ message: string, token: string }> {
        const { email, password } = loginDto;
    
      
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
          throw new BadRequestException('User not found');
        }
        if (!user.isVerified) {
          throw new BadRequestException('Almost there! Verify your email to activate your account.');
        }
       
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          throw new BadRequestException('Incorrect password');
        }
    
        
        const payload = { email: user.email, sub: user.id };
        const token = this.jwtService.sign(payload); 
    
        return { message: 'Welcome ! You are now logged in.', token };
      }


}
