import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sayHello',
  pure: true
})
export class SayHelloPipe implements PipeTransform {
  transform(name: string): string {
    return 'Hello ' + name + '!';
  }
}

@Pipe({
  name: 'random',
  pure: false
})
export class RandomNumberPipe implements PipeTransform {
  transform(num: number, max: number): number {
    return Math.floor(Math.random() * max) + 1;
  }
}
