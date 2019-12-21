import { Controller, Get, Req, Res } from '@nestjs/common';
import { UsersService } from '../users.service';

// Max distance in miles... need to get from user preferences (not set up yet)
const maxDistance = 5;

@Controller('users')
export class UsersController {
  constructor(private users: UsersService) {}

  @Get()
  async find(@Req() req, @Res() res) {
    const { query } = req;

    const users = await this.users.find(maxDistance, query.lat, query.lng);

    return res.json(users);
  }
}
