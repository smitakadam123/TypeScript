import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

data;
  constructor() {}

  ngOnInit() {}
  onOk()
  // tslint:disable-next-line:one-line
  {
          this.data = 'This is event binding';
  }

}
