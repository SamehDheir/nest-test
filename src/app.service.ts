import { Injectable, OnModuleInit } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  
  private readonly logger = new Logger(AppService.name);

  onModuleInit() {
    this.logger.log('⏳ An asynchronous process is running that may fail after 3 seconds...');
  }

  async simulatedAsyncOperation() {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('💥 Catastrophic error: Database connection failed!'));
        }, 3000);
      });
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}