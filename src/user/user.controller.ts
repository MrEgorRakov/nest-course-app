import { Controller, Get } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly utilityService: UtilityService,
    private readonly globalHelperService: GlobalHelperService,
  ) {}

  @Get('/global') //from global-helper module :3
  globalFunc(): string {
    return this.globalHelperService.globalFunc();
  }

  @Get('/shared')
  shareFunction(): string {
    return this.utilityService.shareFunction();
  }
}
