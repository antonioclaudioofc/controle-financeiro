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
  constructor(public dialog: MatDialog) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    taskToEdit?: Task // Adicionamos um parâmetro opcional para a tarefa a ser editada
  ): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '24rem',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { task: taskToEdit }, // Passamos a tarefa para o diálogo como dados
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Lógica para processar o resultado (adicionar ou editar)
      if (result && taskToEdit) {
        // Se o resultado não for nulo e estamos editando, chame o método de edição
        console.log('Edit Task:', result);
      } else if (result) {
        // Se o resultado não for nulo e não estamos editando, chame o método de adição
        console.log('Add Task:', result);
      } else {
        // Se o resultado for nulo, o usuário cancelou a operação
        console.log('Operation canceled');
      }
    });
  }
}
