import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from 'src/app/model/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSource = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSource.asObservable();

  addTask(newTask: Task) {
    const currentTasks = this.tasksSource.value;
    this.tasksSource.next([...currentTasks, newTask]);
  }
}
