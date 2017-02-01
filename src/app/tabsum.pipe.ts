import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tabsum'
})
export class TabsumPipe implements PipeTransform {
  //value = ""
  transform(value: string, num: number): any {

      if (value.length > num) {
        value = value.substring(1, num) + '...'
      }
      return value;
    }

}
