import { Module } from '@nestjs/common';
import { TareasModule } from './tareas/tareas.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [TareasModule, ProyectosModule, AuthModule, UsersModule],
  
})

export class AppModule {}
