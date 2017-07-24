import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FourthComponent } from "./fourth/fourth.component";
import { NextCompComponent } from './next-comp/next-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FourthComponent,
    NextCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
