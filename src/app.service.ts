import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  onModuleInit() {
    console.log('🕒 An asynchronous process is running that will succeed...');

    this.simulatedAsyncOperation().catch((error) => console.error(error)).then(() => {
      console.log('✅ Successfully ran the simulated asynchronous operation.');
    });
  }

  async simulatedAsyncOperation() {
    try {
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('❌ Failed to connect to the database!')); / Changed error message to 'Error' instead of a custom error.
        }, 3000);
      });
    } catch (error: any) { 
      console.error('Captured in catch block:', error);
      throw error; / Re-throw the error to handle in onModuleInit
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}