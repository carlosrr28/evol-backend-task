import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }))
  async create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    const newTask = new Task();
    newTask.title = createTaskDto.title;
    newTask.description = createTaskDto.description;
    newTask.completed = createTaskDto.completed;
    newTask.tags = createTaskDto.tags;
    newTask.dueDate = createTaskDto.dueDate;

    // Asignamos las fechas de creación y actualización
    const currentDate = new Date();
    newTask.createdAt = currentDate;
    newTask.updatedAt = currentDate;

    // Guardamos la tarea en la base de datos
    await newTask.save();
    return newTask;
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    // Buscamos la tarea en la base de datos
    const task = await this.taskService.findOne(id);
    
    // Si la tarea no existe, retornamos un error
    if (!task) {
      throw new Error('Task not found');
    }

    // Actualizamos la tarea con los datos nuevos
    task.title = updateTaskDto.title || task.title;
    task.description = updateTaskDto.description || task.description;
    task.completed = updateTaskDto.completed !== undefined ? updateTaskDto.completed : task.completed;
    task.tags = updateTaskDto.tags || task.tags;
    task.dueDate = updateTaskDto.dueDate || task.dueDate;

    // Actualizamos la fecha de modificación
    task.updatedAt = new Date();

    // Guardamos la tarea actualizada en la base de datos
    await task.save();
    return task;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.taskService.remove(id);
  }
}
