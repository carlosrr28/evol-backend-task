// src/task/task.model.ts
import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,  // Esto asegura que Sequelize maneje 'createdAt' y 'updatedAt' automáticamente
})
export class Task extends Model<Task> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true, 
    primaryKey: true,
  })
  id: number;
  

  @Column
  title: string;

  @Column
  description: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  completed: boolean;

  @Column(DataType.JSONB)  // Para manejar un array de tags
  tags: string[];

  @Column
  dueDate: Date;
}
