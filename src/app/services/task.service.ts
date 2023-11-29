import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private createIdForTask: number = 1;

  constructor() {}

  create(task: Task): void {
    task.id = this.createIdForTask++;
    this.tasks.push(task);
  }

  edit(updatedTask: Task): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === updatedTask.id);

    if (taskIndex !== -1) {
      this.tasks[taskIndex] = updatedTask;
    }
  }

  getAll(): Task[] {
    return this.tasks;
  }
}
