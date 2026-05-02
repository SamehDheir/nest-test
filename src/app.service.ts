import { Injectable, OnModuleInit } from '@nestjs/common';

export class TimeoutError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TimeoutError';
  }
}

@Injectable()
export class AppService implements OnModuleInit {
  
  onModuleInit() {
    console.log('⏳ An asynchronous process is running that will fail after 3 seconds...');

    this.simulatedAsyncOperation().catch((error) => {
      console.error('Error occurred:', error);
    });
  }

  async simulatedAsyncOperation() {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new TimeoutError('💥 Catastrophic error: Database connection failed!'));
        }, 3000);
      });
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}