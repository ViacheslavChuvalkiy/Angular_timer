import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent {

  startTimeData = 0;

  buttons = [
    {name: "Start", className: "btnStart", action: "incrementCounterData"},
    {name: "Stop", className: "btnStop", action: "stopCounterData"},
    {name: "Reset", className: "btnReset", action: "btnReset"}
  ]
}
