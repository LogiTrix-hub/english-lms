import { Injectable, NotFoundException } from '@nestjs/common';
import { User, UserRoles } from './users.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 1, username: 'Yevhen', password: '123456', role: UserRoles.Admin },
    { id: 1, username: 'Sasha', password: 'qwerty', role: UserRoles.Teacher },
    { id: 1, username: 'Sergey', password: 'asdfgh', role: UserRoles.Student },
  ];

  async findOne(username: string) {
    const user = this.users.find((item) => item.username === username);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
}
