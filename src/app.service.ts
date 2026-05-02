import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  
  onModuleInit() {
    console.log('⏳ An asynchronous process is running that will fail after 3 seconds...');

    this.simulatedAsyncOperation();
  }

  async simulatedAsyncOperation() {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('💥 Catastrophic error: Database connection failed!'));
      }, 3000);
    });
  }

  getHello(): string {
    return 'Hello World!';
  }
<<<<<<< HEAD
=======

  onModuleInit() {
    console.log('🚀 App started, waiting 5 seconds to trigger error...');

    setTimeout(() => {
      const user: any = null;
      if (user !== null) {
        console.log(user.name);
      } else {
        console.log('User is null');
      }
    }, 5000);
  }
>>>>>>> 4b3004040ee8803869a417a1bc17edd3103281ca
}