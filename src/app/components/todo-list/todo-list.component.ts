import { Component } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent{
  constructor(private taskService: TaskService){}

  tasks: Task[] = this.taskService.getAll()

}
