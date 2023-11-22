import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): unknown {
    let currentyear = new Date().getFullYear();
    let birthyear = new Date(value).getFullYear();
    let age = currentyear-birthyear;
    return age;
  }

}
