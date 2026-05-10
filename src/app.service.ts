import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  getHello(): string {
    return 'Hello World!';
  }

  onModuleInit() {
    console.log('\u{1F680} App started, waiting 5 seconds to trigger error...');

    setTimeout(() => {
      const user: unknown = null;
      if (user) {
        console.log(user.name);
      } else {
        console.log('User is null');
      }
    }, 5000);
  }
}
