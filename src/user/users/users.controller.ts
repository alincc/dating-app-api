import {
  Controller,
  Get,
  Req,
  Res,
  Next,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from '../users.service';
import { User } from '../models';

// Max distance in miles... need to get from user preferences (not set up yet)
const maxDistance = 5;

@Controller('users')
export class UsersController {
  constructor(private users: UsersService) {}

  @Get()
  async find(@Req() req): Promise<User[]> {
    const {
      query: { lat, lng },
    } = req;

    if (!lat || !lng) {
      throw new HttpException(
        'No location data provided.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const users = await this.users.find(maxDistance, lat, lng);

    return users;
  }
}
