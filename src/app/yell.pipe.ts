import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yell'
})
export class YellPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args ? value + args : value + '!!!';
  }

}
