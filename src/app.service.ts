import { Injectable, OnModuleInit } from '@nestjs/common';


@Injectable()
export class AppService implements OnModuleInit {
  

  onModuleInit() {
    console.log('\u2705 An asynchronous process is running that will not fail this time...');


    this.simulatedAsyncOperation().catch((error) => {

      console.error('Error occurred during asynchronous operation:', error);

    });

  }


  async simulatedAsyncOperation() {
    try {

      await new Promise((resolve, reject) => {

        setTimeout(() => {

          reject(new Error('Error occurred during asynchronous operation!'));

        }, 3000);

      });

    } catch (error) {

      console.error('Error occurred during asynchronous operation:', error);

    }

  }


  getHello(): string {
    return 'Hello World!';

  }

}