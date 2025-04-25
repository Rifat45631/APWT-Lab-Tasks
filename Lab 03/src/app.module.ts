import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamineeModule } from './examinee/examinee.module';

@Module({
  imports: [ExamineeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
