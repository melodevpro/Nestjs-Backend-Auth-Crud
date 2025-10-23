import { NestFactory } from '@nestjs/core';
import { TareasModule } from './tareas/tareas.module';

async function bootstrap() {
  const app = await NestFactory.create(TareasModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
