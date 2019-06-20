import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  public todo: object;

  @Output()
  public done = new EventEmitter<any>();

  @HostBinding('class.foo')
  doneState = false;

  onDone() {
    // oder this.done.emit(this.todo);
    this.done.next(this.todo);
  }

  @HostListener('click')
  onHostClick() {
    this.doneState = !this.doneState;
  }

  ngOnInit(): void {
  }

}
