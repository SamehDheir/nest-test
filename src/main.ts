import { AutoPR } from 'autopr';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  AutoPR.init({
    apiKey: process.env.AUTOPR_API_KEY || '',
    env: process.env.AUTOPR_ENV || 'production',
  });
  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
