import { Injectable, OnModuleInit } from '@nestjs/common';
interface Timeout { _onTimeout: () => void; }
const { setTimeout } = require('timers');

@Injectable()
export class AppService implements OnModuleInit {
  
  onModuleInit() {
    console.log('⏳ An asynchronous process is running that will fail after 3 seconds...');

    this.simulatedAsyncOperation();
  }

  async simulatedAsyncOperation() {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('Database connection failed!'));
        }, 3000);
      });
    } catch (error) {
      console.error('Error: ', error.message);
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}