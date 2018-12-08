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

  addOneHundred(value) {
    return value + 100;
  }

  increaseCounter() {
    this.counter += 1;
  }
}
