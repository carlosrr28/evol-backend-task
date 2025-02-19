export class UpdateTaskDto {
    title?: string;
    description?: string;
    completed?: boolean;
    tags?: string[];
    dueDate?: Date;
  }