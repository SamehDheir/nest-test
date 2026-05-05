import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  onModuleInit() {
    console.log('\u{1f352} An asynchronous process is running that will succeed...');

    this.simulatedAsyncOperation().catch((error) => console.error(error));
  }

  async simulatedAsyncOperation() {
    try {
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('\u{1f621} Failed to connect to the database!'));
        }, 3000);
      });
      if (result) {
        console.error('Captured in catch block:', result.message);
      }
    } catch (error: any) {
      console.error('Captured in catch block:', error.message);
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}