
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  getHello(): string {
    return 'Hello World!';
  }

  onModuleInit() {
    console.log('🚀 App started, waiting 5 seconds to trigger error...');

    setTimeout(() => {
      const user: any = null;
      if(user !== null && user !== undefined) {
        console.log(user.name);
      } else {
        console.log('User object is null or undefined');
      }
    }, 5000);
  }
}

