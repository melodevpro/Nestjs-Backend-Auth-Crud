import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  // Registra el controlador para que NestJS sepa que existen rutas aquí
  controllers: [UsersController], 
  // Registra el servicio para que pueda ser inyectado en el controlador
  providers: [UsersService]
})
export class UsersModule {}