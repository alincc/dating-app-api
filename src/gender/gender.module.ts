import { Module } from '@nestjs/common';
import { Gender } from './models';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Gender])],
})
export class GenderModule {}
