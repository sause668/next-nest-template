import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}
@Injectable()
export class TasksService {
  // Simulating a database with a private array
  private tasks: Task[] = [
    { id: 1, title: 'Write NestJS Article', isCompleted: false },
    { id: 2, title: 'Deploy Backend API', isCompleted: true },
  ];

  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }
  
  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
