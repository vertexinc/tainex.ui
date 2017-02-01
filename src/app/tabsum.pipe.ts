import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tabsum'
})
export class TabsumPipe implements PipeTransform {
  //value = ""
  transform(value: string, num: number): any {
      let val = "";
      val += value;
      if (val.length > num) {
        val = val.substring(0, num) + '...'
      }
      return val;
    }

}
