import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  // Wenn statt color appTest als name, dann kann man im html statt "appTest color="..." einfach nur appTest="..." schreiben"
  @Input()
  @HostBinding('style.color')
  color: string;

}
