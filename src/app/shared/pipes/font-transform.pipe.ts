import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fontTransform'
})
export class FontTransform implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return `<span style="font-size: 20px;">${value}</span>`;
    
  }

}