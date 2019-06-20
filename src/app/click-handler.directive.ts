import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appClickHandler]'
})
export class ClickHandlerDirective {

  @HostListener('click')
  handleClick() {
    console.log('Click directive triggered');
  }

}
