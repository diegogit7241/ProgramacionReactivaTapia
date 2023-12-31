import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/Models';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): unknown {
    
    return value.name+ ' '+value.lastName;
  }

}
