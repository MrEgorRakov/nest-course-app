import { Controller, Get } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('chat')
export class ChatController {
  constructor(
    private readonly utilityService: UtilityService,
    private readonly globalHelperService: GlobalHelperService,
  ) {}

  @Get('/shared')
  shareFunction(): string {
    return this.utilityService.shareFunction();
  }

  @Get('/global')
  globalFunc(): string {
    return this.globalHelperService.globalFunc();
  }
}
