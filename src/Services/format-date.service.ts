import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatDateService {

  getFormatDate(time:any){
    const secs = Math.floor(time) % 60 < 10 ? '0' + Math.floor(time) % 60 : Math.floor(time) % 60;
    const mins = Math.floor(time / 60) % 60 < 10 ? '0' + Math.floor(time / 60) % 60 : Math.floor(time / 60) % 60;
    return `${mins}:${secs}`
  }
}
