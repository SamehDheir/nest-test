import { Injectable, OnModuleInit } from '@nestjs/common';

interface ErrorWithStatus {
  status: number;
  message: string;
}

@Injectable()
export class AppService implements OnModuleInit {
  
  onModuleInit() {
    console.log('⏳ An asynchronous process is running that will not fail...');
  }

  async simulatedAsyncOperation() {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ status: 200, message: 'Async operation completed successfully' });
        }, 3000);
      });
    } catch (error) {
      console.error('Error occurred:', error.message);
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
