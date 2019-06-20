import {Component, ElementRef} from '@angular/core';

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

  constructor(ref: ElementRef) {
    console.log(ref);
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

}
