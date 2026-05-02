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
}
