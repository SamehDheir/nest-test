import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  getHello(): string {
    return 'Hello World!';
  }

  onModuleInit() {
    console.log('🚀 App started, waiting 5 seconds to trigger error...');
    
    setTimeout(() => {
      // هذا الخطأ سيحدث خارج نطاق NestJS (Unhandled)
      // وسيجبر الـ monitor على البدء فوراً
      const user: any = null;
      console.log(user.name); 
    }, 5000);
  }
}