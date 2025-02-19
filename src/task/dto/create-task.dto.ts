import { IsString, IsBoolean, IsArray, IsDateString, ArrayNotEmpty, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  completed: boolean;

  @IsArray()
  @ArrayNotEmpty()
  tags: string[];

  @IsDateString()
  dueDate: Date;

  @IsOptional() // No se espera desde el front, pero si se pasa, debe ser válida
  @IsDateString()
  createdAt?: Date;

  @IsOptional() // Lo mismo para updatedAt
  @IsDateString()
  updatedAt?: Date;
}
