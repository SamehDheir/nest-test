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
      // Fixed: Added a null check to prevent accessing properties of null
      if (user) {
        console.log(user.name); 
      } else {
        console.log('User is null, cannot read name property.');
      }
    }, 5000);
  }
}