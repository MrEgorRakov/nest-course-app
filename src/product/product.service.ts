import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  productFunc(): string {
    return 'product service hello world';
  }
  productFunc2(): string {
    return 'Hello from product service2';
  }

  productJSON_test() {
    return {
      name: 'MC POX',
      age: 23,
      hobby: true,
    };
  }
}
