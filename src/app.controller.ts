import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/get_name')
  getName(): string {
    return this.appService.getName();
  }

  @Get('/get_JSON')
  getJSON() {
    return this.appService.getJSON();
  }

  @Get('/get_JSON2')
  getJSON2() {
    return this.appService.getJSON2();
  }

  @Get('/get_git')
  getGit() {
    return this.appService.getGit();
  }
}
