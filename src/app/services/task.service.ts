import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private task: Task[] = [];

  constructor(private router: Router) {}

  create(task: Task): void {
    this.task.push(task);
  }

  getAll(): Task[] {
    return this.task;
  }
}
