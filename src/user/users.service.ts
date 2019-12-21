import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  find(distance: number, lat: number, lng: number) {
    return this.userRepo
      .createQueryBuilder()
      .select()
      .where(
        `(
            3959 *
            acos(
                cos( radians(:lat) ) *
                cos( radians(user.lat) ) *
                cos(
                    radians(user.lng) - radians(:lng)
                ) +
                sin( radians(:lat) ) *
                sin( radians(user.lat) )
            )
        ) < :distance`,
        { distance, lat, lng },
      )
      .getMany();
  }
}
