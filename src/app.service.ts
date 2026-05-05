import { Injectable, OnModuleInit } from '@nestjs/common';

export class TimeoutError extends Error {
  constructor(message: string) {
    super(message);
  }
}

@Injectable()
export class AppService implements OnModuleInit {
  onModuleInit() {
    console.log('\u{1F352} An asynchronous process is running that will succeed...');

    this.simulatedAsyncOperation().catch((error) => {
      if (error instanceof TimeoutError) {
        console.error('💔 Operation timed out:', error.message);
      } else {
        console.error('🤕 Oops, something went wrong:', error.message);
      }
    });
  }

  async simulatedAsyncOperation() {
    try {
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new TimeoutError('❌ Operation timed out!'));
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