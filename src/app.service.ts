import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  
  onModuleInit() {
    console.log('🕒 An asynchronous process is running that will succeed...');

    this.simulatedAsyncOperation().catch(error => console.error(error));
  }

  async simulatedAsyncOperation() {
    try {
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Database connection was successful!');
        }, 3000);
      });
    } catch (error) {
      console.error(error);
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}