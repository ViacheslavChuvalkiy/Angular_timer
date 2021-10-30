import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() name: string | undefined;
  @Input() className: string | undefined;
  @Input() action: string | undefined;
}