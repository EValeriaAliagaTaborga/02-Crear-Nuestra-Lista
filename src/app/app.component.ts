import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lista de Pasos para hacer un proyecto con Angular';
  todoList = [
    {title: 'Inslala NodeJS'},
    {title: 'Instala Angular CLI'},
    {title: 'crear new app'},
    {title: 'correr app'},
    {title: 'desarrolladro app'},
    {title: 'deployar app'},
  ];
}
