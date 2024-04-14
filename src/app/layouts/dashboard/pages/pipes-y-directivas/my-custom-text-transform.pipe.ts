import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomTextTransform'
})
export class MyCustomTextTransformPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return `<span style="font-size: 20px;">${value}</span>`;
  }

}
