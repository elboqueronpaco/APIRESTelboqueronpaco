import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger()
  await app.listen(3000);
  logger.verbose(`Server is running in http://localhost:3000`)
}
bootstrap();
