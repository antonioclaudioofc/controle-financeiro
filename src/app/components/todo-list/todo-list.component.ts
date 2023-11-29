import { Component } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task.service';
import { TaskUpdateComponent } from '../task/task-update/task-update.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  tasks: Task[] = this.taskService.getAll();

  openEditTask(task: Task): void {
    const enterAnimationDuration = '2ms';
    const exitAnimationDuration = '2ms';
    const dialogRef = this.dialog.open(TaskUpdateComponent, {
      width: '24rem',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { task },
    });
  }
}
