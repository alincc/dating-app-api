import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { School } from './models/school';

@Module({
  imports: [TypeOrmModule.forFeature([School])],
})
export class SchoolModule {}
