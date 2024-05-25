import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameJoinLastName'
})
export class NameJoinLastNamePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if(args[0] && args[1])
      return args[0].concat(" ").concat(args[1]);
    return "-";
  }

}
