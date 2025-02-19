import { Column, Model, Table, DataType } from 'sequelize-typescript';
@Table({
  timestamps: true,
  defaultScope: {
    attributes: { exclude: ['dataValues', '_previousDataValues', '_changed', '_options', 'isNewRecord'] }, // Excluir las propiedades internas de Sequelize
  },
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

  @Column(DataType.JSONB)
  tags: string[];

  @Column
  dueDate: Date;
}
