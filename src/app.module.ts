// src/app.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin', // Cambia por tu usuario
      password: 'admin', // Cambia por tu contraseña
      database: 'task',
      autoLoadModels: true,
      synchronize: true, // Se recomienda desactivar en producción
    }),
    TaskModule,
  ],
})
export class AppModule {}
