import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  value = 'Hellcat';
  color = 'red';
  number = 12345.6789;
  myTodo = {name: 'Wash clothes', done: false, id: 3};

  handleClick({clientX, clientY}: MouseEvent) {
    console.log('Hello');
    console.log(`${clientX} ${clientY}`);
  }

  handleHover() {
    this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  }

  onDone(evt: any) {
    alert(evt.name);
  }

}
