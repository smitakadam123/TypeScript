import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { User1Component } from './user1/user1.component';
import { MyRoutes } from './app.router';
import { WallComponent } from './wall/wall.component';
import { GuestComponent } from './guest/guest.component';

@NgModule({
  declarations: [
    AppComponent,
    User1Component,
    WallComponent,
    GuestComponent

  ],
  imports: [
    BrowserModule,
    MyRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
