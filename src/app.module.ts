import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CorsHeaderInterceptor } from './interceptors';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, UserModule } from 'src/user';
import { Gender, GenderModule } from 'src/gender';
import { Orientation, OrientationModule } from 'src/orientation';
import { School, SchoolModule } from 'src/school';
import { Photo, PhotoModule } from 'src/photo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'dating-app',
      password: 'dating-app',
      database: 'dating_app',
      entities: [User, Gender, Orientation, School, Photo],
      synchronize: true,
    }),
    UserModule,
    GenderModule,
    OrientationModule,
    SchoolModule,
    PhotoModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CorsHeaderInterceptor,
    },
  ],
})
export class AppModule {}
