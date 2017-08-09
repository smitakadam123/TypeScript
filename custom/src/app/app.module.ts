import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InterCompComComponent } from './inter-comp-com/inter-comp-com.component';
import { InComComponent } from './inter-comp-com/in-com.component';
import { OutComComponent } from './inter-comp-com/out-com.component';


@NgModule({
  declarations: [
    AppComponent,
    InterCompComComponent,
    InComComponent,
    OutComComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
