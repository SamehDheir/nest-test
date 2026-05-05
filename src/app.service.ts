import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  onModuleInit() {
    console.log('🕒 An asynchronous process is running that will succeed...');

    this.simulatedAsyncOperation().catch((error) => console.error(error));
  }

  async simulatedAsyncOperation() {
    try {
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('❌ Failed to connect to the database!'));
        }, 3000);
      });
    } catch (error: any) {
      console.error('Captured in catch block:', error.message);
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
