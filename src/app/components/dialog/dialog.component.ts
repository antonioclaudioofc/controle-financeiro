import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private taskService: TaskService
  ) {}

  newTask: Task = { name: '', description: '', color: ''};

  addTask() {
    if (this.newTask.name.trim() !== '') {
      this.taskService.addTask({ ...this.newTask });
      this.newTask = { name: '', description: '', color: ''};
      this.dialogRef.close();
    }
  }
}
