import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskModule } from './task/task.module';
import * as dotenv from 'dotenv';
dotenv.config();

console.log('Database Config:', {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD ? '********' : 'MISSING', // Oculta la contraseña
  database: process.env.DB_NAME,
});


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD ? String(process.env.DB_PASSWORD) : 'admin',
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
    TaskModule,
  ],
})
export class AppModule {}
