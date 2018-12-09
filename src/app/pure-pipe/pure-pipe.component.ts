import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pure-pipe',
  templateUrl: './pure-pipe.component.html',
  styleUrls: ['./pure-pipe.component.css']
})
export class PurePipeComponent implements OnInit {
  public counter = 0;
  constructor() { }

  ngOnInit() { }

  increaseCounter() {
    this.counter += 1;
  }
}
