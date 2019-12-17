import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orientation } from './models';

@Module({
  imports: [TypeOrmModule.forFeature([Orientation])],
})
export class OrientationModule {}
