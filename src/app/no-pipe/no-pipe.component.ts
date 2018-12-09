import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-pipe',
  templateUrl: './no-pipe.component.html',
  styleUrls: ['./no-pipe.component.css']
})
export class NoPipeComponent implements OnInit {
  public counter = 0;
  constructor() {}

  ngOnInit() {}

  power(value: number, exp: number) {
    return Math.pow(value, exp);
  }

  increaseCounter() {
    this.counter += 1;
  }
}
