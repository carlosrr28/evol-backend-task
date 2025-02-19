// src/task/task.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task)
    private taskModel: typeof Task,
  ) {}

    async createTask(task: Task): Promise<Task> {
      // Pasamos el DTO directamente sin los campos 'createdAt' y 'updatedAt'
      return this.taskModel.create(task);  // Sequelize se encarga de 'createdAt' y 'updatedAt'
    }

  async findAll(): Promise<Task[]> {
    return this.taskModel.findAll();
  }

  async findOne(id: number): Promise<Task | null> {
    return this.taskModel.findOne({ where: { id } });
  }

  async update(id: number, updateTaskDto: Partial<CreateTaskDto>): Promise<Task | null> {
    const task = await this.findOne(id);
    if (task) {
      return task.update(updateTaskDto);
    }
    return null;
  }

  async remove(id: number): Promise<void> {
    const task = await this.findOne(id);
    if (task) {
      await task.destroy();
    }
  }
}
