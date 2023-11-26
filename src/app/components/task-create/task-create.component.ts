import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css'],
})
export class TaskCreateComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<TaskCreateComponent>,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {}

  newTask: Task = { name: '', description: '', color: '#ffff' };

  createTask(): void {
    this.taskService.create(this.newTask);
    this.dialogRef.close();
  }
}
