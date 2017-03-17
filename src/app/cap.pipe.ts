import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cap'
})
export class CapPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }

}
