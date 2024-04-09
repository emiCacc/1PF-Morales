import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomTextTransform'
})
export class MyCustomTextTransformPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    console.log(args[0]);
    
    if(args[0] === 'u'){
      return value.toUpperCase();
    } else {
      return value.toLowerCase();
    }
    
  }

}
