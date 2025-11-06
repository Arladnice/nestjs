import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      username: 'john',
      email: 'john@example.com',
    },

    {
      id: 2,
      username: 'jane',
      email: 'jane@example.com',
    },

    {
      id: 3,
      username: 'doe',
      email: 'doe@example.com',
    },
  ];

  findAll() {
    return this.users;
  }
}
