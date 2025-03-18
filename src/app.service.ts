import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { message: 'NestJS with love(MVC)' };
  }

  getName(): string {
    return 'Egor Rakov';
  }

  getJSON() {
    return {
      message: 'name: Egor Rakov',
      message2: 'age: 17',
      message3: 'email: egorrakov50@gmail.com',
    };
  }

  getJSON2() {
    return {
      name: 'Egor2',
      lastName: 'Rakov2',
      age: 17,
    };
  }

  getGit() {
    return 'git and github are cool';
  }

  getPostman() {
    return 'we use POOstman:,)';
  }
}
