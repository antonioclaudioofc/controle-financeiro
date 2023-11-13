import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  tasks: Task[] = [];
  newTask: Task = { name: '', description: '' };

  constructor(public dialog: MatDialog) {}

  addTask() {
    if (this.newTask.name.trim() !== '') {
      this.tasks.push({ ...this.newTask });
      this.newTask = { name: '', description: '' };
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogComponent, {
      width: '24rem',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
