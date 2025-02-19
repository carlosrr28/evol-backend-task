import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskModule } from './task/task.module';
import { environment } from '../environments/environments';

// Muestra las variables de entorno cargadas
console.log('Database Config:', {
  host: environment.DB_HOST,
  port: environment.DB_PORT,
  user: environment.DB_USER,
  password: environment.DB_PASSWORD,
  database: environment.DB_NAME,
});

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: environment.DB_HOST,
      port: environment.DB_PORT,
      username: environment.DB_USER,
      password: environment.DB_PASSWORD,
      database: environment.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
    TaskModule,
  ],
})
export class AppModule {}
