import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  tile = 'app';
  my: any;
  // tslint:disable-next-line:one-line
  constructor(public ser: DataService){
  this.my = this.ser.nm;
}
}

