import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doctype'
})
export class DoctypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 1){
      return "CBCR"
    }else {
      return "Other"
    }
  }

}
