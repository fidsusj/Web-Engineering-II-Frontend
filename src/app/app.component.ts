import {Component, ElementRef} from '@angular/core';
import {TodoService} from './todo.service';
import {Todo} from './todo';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = 'Hellcat';
  color = 'red';
  number = 12.3456789;
  myTodo = {name: 'Wash clothes', done: false, id: 3};
  show = true;
  // before: todos: Todo[];
  todos$: Observable<Todo[]>;
  title = 'Neues Todo';

  constructor(private ref: ElementRef, private todoService: TodoService ) {
    console.log(this.ref);
    console.log(this.todoService.getAll());
    // statt this.todoService.getAll().subscribe(todos => this.todos = todos);
    this.todos$ = this.todoService.getAll();
  }

  handleClick({clientX, clientY}: MouseEvent): void {
    alert(`xPos: ${clientX}, yPos: ${clientY}`);
  }

  handleHover(): void {
    this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  }

  onDone(evt: any): void {
    alert(evt.name);
  }

  toggle() {
    this.show = !this.show;
  }

  onSubmit() {
    // this.todoService.create(new Todo(this.title)).subscribe();

    this.todos$ = this.todoService.create(new Todo(this.title)).pipe(
      switchMap(() => this.todoService.getAll())
    );
  }

}
