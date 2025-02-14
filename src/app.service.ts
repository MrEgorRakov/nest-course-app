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
}
