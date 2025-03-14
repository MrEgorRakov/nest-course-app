import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJS!';
  }

  getName(): string {
    return 'Egor Rakov';
  }

  getJSON() {
    return {
      name: 'Egor',
      lastName: 'Rakov',
      age: 17,
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
