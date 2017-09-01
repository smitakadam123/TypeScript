import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `<h2>{{title}}</h2>
     <input type="text" ngModel="fname">
     <input type="text" ngModel="lname">
     Fullname: {{fname}} {{lname}}`
})
export class TwoWayBindingComponent {
public title = 'Two Way DataBinding';
public fname;
public lname;

}
