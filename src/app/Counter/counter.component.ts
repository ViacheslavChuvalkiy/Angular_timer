import {Component, OnInit} from '@angular/core';
import {interval, Observable, fromEvent} from "rxjs";
import {takeWhile} from "rxjs/operators"

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent implements OnInit{

  timeData = "0";
  isStarted = false;
  lastClick = 0;

  obj$ = new Observable((observer:any) => {
    if(!this.isStarted){
      observer.complete();
      observer.unsubscribe();
    }
    observer.next(+this.timeData + 1);
  });

  buttons = [
    {name: "Start", className: "btnStart"},
    {name: "Stop", className: "btnStop"},
    {name: "Reset", className: "btnReset"}
  ];

  ngOnInit(): void {
    fromEvent(document.getElementsByClassName('counterBlock'), 'click')
      .subscribe(() => {
        if(!this.isStarted){
          return;
        }
        // @ts-ignore
        if (new Date().getTime() - this.lastClick <= 500) {
          this.isStarted = false;
        }
        // @ts-ignore
        this.lastClick = new Date().getTime();
      });
  }

  clickBtnHandler(event:any){

    event.stopPropagation();

    let value = event.target.value;

    switch (value) {

      case "Start":
        this.isStarted = true;
        this.incrementCounterData();
        break;
      case "Stop":
        this.stopCounterData();
        break;
      case "Reset":
        this.btnReset();
        break;
    }
  }

  incrementCounterData() {

    interval(1000)
      .pipe(takeWhile(() => this.isStarted))
      .subscribe(() => {
          this.obj$.subscribe( res => {
            this.timeData = String(res);
          });
        }
      )
  };

  stopCounterData(){
    if(this.isStarted){
      this.isStarted = false;
    }
  }

  btnReset(){
    this.timeData = "0";
    this.isStarted = false;
  }
}
