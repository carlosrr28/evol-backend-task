// src/task/dto/create-task.dto.ts
export class CreateTaskDto {
  title: string;
  description: string;
  completed: boolean;
  tags: string[];
  dueDate: Date;
}
