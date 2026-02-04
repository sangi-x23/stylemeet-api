import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  app.use(morgan('dev'));

  app.setGlobalPrefix('API-STYLEMEET');

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
