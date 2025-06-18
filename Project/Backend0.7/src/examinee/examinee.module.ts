//examinee.module.ts
import { Module } from '@nestjs/common';
import { ExamineeController } from './examinee.controller';
import { ExamineeService } from './examinee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDetails } from './details.entity';
import { User } from 'src/auth/user.entity';
import { JwtModule } from '@nestjs/jwt'; 
import { JwtAuthGuard } from './jwt-auth.guard';


@Module({
  imports: [
    TypeOrmModule.forFeature([UserDetails, User]),
    JwtModule.register({
      secret: 'YourSecretKey', 
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [ExamineeController],
  providers: [ExamineeService, JwtAuthGuard], 
  exports: [ExamineeService],
})
export class ExamineeModule {}