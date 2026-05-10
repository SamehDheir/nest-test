import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  getHello(): string {
    return 'Hello World!';
  }

  onModuleInit() {
    console.log('\u2708 App started, waiting 5 seconds to trigger error...');

    setTimeout(() => {
      const user: unknown = null;
      if (user) {
        console.log(user.name);
      }
    }, 5000);
  }
}