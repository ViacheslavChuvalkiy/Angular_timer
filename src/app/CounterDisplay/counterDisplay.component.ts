import {Component, Input, OnChanges} from '@angular/core';
import {FormatDateService} from "../../Services/format-date.service";

@Component({
  selector: 'app-counterDisplay',
  templateUrl: './counterDisplay.component.html',
  styleUrls: ['./counterDisplay.component.scss']
})

export class CounterDisplayComponent implements OnChanges{

 @Input() timeData: string | undefined;

  constructor(private dateService: FormatDateService) {
  }

  ngOnChanges(): void {
   this.timeData = this.dateService.getFormatDate(this.timeData);
 }
}
