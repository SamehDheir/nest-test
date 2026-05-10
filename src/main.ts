import { Errflow } from 'errflow';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Errflow.init({
    apiKey: process.env.ERRFLOW_API_KEY || '',
    env: process.env.ERRFLOW_ENV || 'production',
    apiUrl: process.env.ERRFLOW_API_URL,
  });
  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
