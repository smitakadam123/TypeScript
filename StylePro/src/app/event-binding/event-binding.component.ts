import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `<h2>{{heading}}</h2>
  <button (click)="onClick($event)">Click Me</button>
  <input type="text" #demoInput>`,
})
export class EventBindingComponent  {
  public heading = 'Event Binding';
  onclick(value){
       console.log(value);
  }
}
