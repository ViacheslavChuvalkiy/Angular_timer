import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-counterDisplay',
  templateUrl: './counterDisplay.component.html',
  styleUrls: ['./counterDisplay.component.scss']
})

export class CounterDisplayComponent{
 @Input() timeData: number | undefined;
}
