import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Inicializa uso de Pipes para errores
  app.useGlobalPipes(new ValidationPipe());
  //Permite que se conecten otras rutas a la API
  app.enableCors({
    origin: ['http://localhost:4200'],
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
