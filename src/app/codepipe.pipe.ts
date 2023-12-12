import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codepipe'
})
export class CodepipePipe implements PipeTransform {

  transform(value: unknown, code:number): unknown {

    switch (code) {
      case 1:
        return value + " "+ "(in a USA )";
        break;

      case 91:
        return value + " "+ "(in India)";
        break;

      case 65:
        return value + " "+ "(in Philipines)";
        break;

      case 61:
        return value + " "+ "(in Australia)";
        break;

      default:
        return value + " "+ "(in Safe place)";
        break;
    }
  }

}
