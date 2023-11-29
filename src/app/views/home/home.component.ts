import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskCreateComponent } from 'src/app/components/task/task-create/task-create.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const enterAnimationDuration = '2ms';
    const exitAnimationDuration = '2ms';
    const dialogRef = this.dialog.open(TaskCreateComponent, {
      width: '24rem',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
