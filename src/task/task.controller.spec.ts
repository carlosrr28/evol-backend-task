import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

describe('TaskController', () => {
  let controller: TaskController;
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [
        {
          provide: TaskService,
          useValue: {
            findOne: jest.fn().mockResolvedValue({ id: 1, title: 'Test Task' }),
            // Añadir más funciones mockeadas aquí según sea necesario
          },
        },
      ],
    }).compile();

    controller = module.get<TaskController>(TaskController);
    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a task by ID', async () => {
    const task = await controller.findOne(1);
    expect(task).toEqual({ id: 1, title: 'Test Task' });
  });
});
