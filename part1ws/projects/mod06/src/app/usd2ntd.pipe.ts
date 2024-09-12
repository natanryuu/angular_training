import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usd2ntd',
  standalone: true
})
export class Usd2ntdPipe implements PipeTransform {

  // 一開始都會是unknown 記得改成number or string
  transform(value: number, ...args: string[]): number {
    return value*32;
  }

}
