import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {CounterComponent} from  './Counter/counter.component';
import {CounterDisplayComponent} from  './CounterDisplay/counterDisplay.component';
import {ButtonComponent} from  './Button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterDisplayComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
