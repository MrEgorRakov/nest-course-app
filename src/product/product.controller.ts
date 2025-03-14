import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly utilityService: UtilityService,
  ) {}

  @Get('/shared')
  shareFunction(): string {
    return this.utilityService.shareFunction();
  }
  @Get('/user')
  User(): string {
    return this.utilityService.User();
  }
  @Get('/order')
  Order(): string {
    return this.utilityService.Order();
  }
  @Get('/chat')
  Chat(): string {
    return this.utilityService.Chat();
  }
  @Get()
  productFunc(): string {
    return this.productService.productFunc();
  }

  @Get('/function2')
  productFunc2(): string {
    return this.productService.productFunc2();
  }

  @Get('/JSONyo')
  JSON_test() {
    return this.productService.productJSON_test();
  }
}
