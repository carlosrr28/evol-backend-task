import { IsOptional, IsString, IsBoolean, IsArray, IsDateString, ArrayNotEmpty, IsDate } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  tags?: string[];

  @IsOptional()
  @IsDateString()
  dueDate?: Date;

  // Las fechas `createdAt` y `updatedAt` no deben ser proporcionadas, pero se validan si es necesario
  @IsOptional()
  @IsDate()
  createdAt?: Date;

  @IsOptional()
  @IsDate()
  updatedAt?: Date;
}
