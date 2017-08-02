import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
@Output()

xyz: string ;
emi: EventEmitter<string>;
  constructor() {
    this.emi = new EventEmitter<string>();
   }

  ngOnInit() {
  }


  img(s: string) {
  this.emi.emit(s);
}

}
