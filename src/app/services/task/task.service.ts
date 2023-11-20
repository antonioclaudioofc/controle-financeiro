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

  editTask(updatedTask: Task) {
    const currentTasks = this.tasksSource.value;
    const updatedTasks = currentTasks.map((task) =>
      task.name === updatedTask.name ? { ...updatedTask } : task
    );
    this.tasksSource.next(updatedTasks);
  }

  deleteTask(taskName: string) {
    const currentTasks = this.tasksSource.value;
    const updatedTasks = currentTasks.filter((task) => task.name !== taskName);
    this.tasksSource.next(updatedTasks);
  }
}
