
```typescript
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {

  onModuleInit() {
    console.log('⏳ An asynchronous process is running that will not fail after 3 seconds...');
    this.simulatedAsyncOperation().catch((error) => console.error(error));
  }

  async simulatedAsyncOperation() {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Operation completed successfully!');
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
