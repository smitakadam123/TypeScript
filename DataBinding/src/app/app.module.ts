import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { InComComponent } from './data-bind/in-com.component';


@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    DataBindComponent,
    InComComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
