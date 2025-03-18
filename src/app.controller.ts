import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index') // the return value to the webpage :3
  getHello() {
    return this.appService.getHello();
  }

  @Get('/get_name')
  getName(): string {
    return this.appService.getName();
  }

  @Get('/get_JSON')
  @Render('index')
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

  @Get('/get_postman')
  getPostman() {
    return this.appService.getPostman();
  }
}
