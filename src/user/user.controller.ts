import { Controller, Get } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('user')
export class UserController {
  constructor(private readonly utilityService: UtilityService) {}

  @Get('/shared')
  shareFunction(): string {
    return this.utilityService.shareFunction();
  }
}
