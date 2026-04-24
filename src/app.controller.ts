import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('error')
  getError(): string {
    // Simulate a production error: accessing property of undefined
    const userData: any = null;
    return userData.name; // This will cause a 500 error
  }
}
