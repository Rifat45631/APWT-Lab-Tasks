//examinee.service.ts
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDetails } from './details.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/user.entity';

@Injectable()
export class ExamineeService {
  constructor(
    @InjectRepository(UserDetails)
    private userDetailsRepository: Repository<UserDetails>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUserDetails(userId: number, userDetails: Partial<UserDetails>) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    
    const details = this.userDetailsRepository.create({ ...userDetails, user });

   
    return await this.userDetailsRepository.save(details);
  }

  async getUserDetails(userId: number) {
    const details = await this.userDetailsRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });
    if (!details) {
      throw new NotFoundException('User details not found');
    }
    return details;
  }

  async updateUserDetails(userId: number, userDetails: Partial<UserDetails>) {
    const details = await this.getUserDetails(userId);
    await this.userDetailsRepository.update(details.id, userDetails);
    
    
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (user) {
      user.username = userDetails.username || user.username;
      user.age = userDetails.age || user.age;
      user.institution = userDetails.institution || user.institution;
      user.region = userDetails.region || user.region;
      await this.userRepository.save(user);
    }

    return this.getUserDetails(userId);
  }

  async deleteUserDetails(userId: number) {
    const details = await this.getUserDetails(userId);
    await this.userDetailsRepository.remove(details);
    await this.userRepository.delete(userId); 
    return { message: 'User and user details deleted successfully' };
  }
}
