import { Injectable } from '@nestjs/common';
import { Role } from 'src/enums/role.enum';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'xiaohong',
      password: 'xiaohonga',
      roles: [Role.Admin],
    },
    {
      userId: 2,
      username: 'xiaoming',
      password: 'xiaominga',
      roles: [Role.User],
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
