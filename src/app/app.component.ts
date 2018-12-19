import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = 'Lista de Pasos para hacer un proyecto con Angular';
  esMartes = true;
  blue = 'blue';
  valorFinal = 1;
  todoList = [
    {title: 'Inslala NodeJS'},
    {title: 'Instala Angular CLI'},
    {title: 'crear new app'},
    {title: 'correr app'},
    {title: 'desarrolladro app'},
    {title: 'deployar app'},
  ];
  excede = this.todoList.length > 0;

  cambiarAzul() {
    return 'blue';
  }

  cambiarColor() {
    // Con let la variable solo denrto de la funcion
    if (this.valorFinal === 1) {
      this.valorFinal = 0;
    } else {
      this.valorFinal = 1;
    }
    return this.valorFinal;
  }

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }

  addItem(title: string): void {
    this.todoList.push({title});
  }

  agregaItem(title: string): void {
    this.todoList.push({title : this.title});
  }

  cambiarTitulo(event: any) {
    console.log(event);
    this.title = event.target.value;
  }

}
