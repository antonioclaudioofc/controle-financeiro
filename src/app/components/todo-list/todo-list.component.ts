import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  private subscription!: Subscription;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.subscription = this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
