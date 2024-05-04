import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LogInPayloadDto } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signIn({ username, pass }: LogInPayloadDto) {
    const user = await this.usersService.findOne(username);
    if (user.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    password;

    return result;
  }
}
