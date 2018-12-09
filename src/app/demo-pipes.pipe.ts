import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power',
  pure: true
})
export class PowerPipe implements PipeTransform {
  transform(num: number, power: number): number {
    return Math.pow(num, power);
  }
}

@Pipe({
  name: 'random',
  pure: false
})
export class RandomNumberPipe implements PipeTransform {
  transform(num: number, max: number): number {
    return num + Math.floor(Math.random() * max) + 1;
  }
}
