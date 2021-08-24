import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'xiaohong',
      password: 'xiaohonga',
    },
    {
      userId: 2,
      username: 'xiaoming',
      password: 'xiaominga',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}