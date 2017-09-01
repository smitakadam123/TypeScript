import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorials',
  template: `<h2>{{title}}</h2>
  <div [class.myClass]="applyclass">Apply Class</div>
  <div [style.color]="applyblue? 'blue' : 'orange'">This is style binding</div>
  <img [src]="imgLink"><br><br>
  <input type="text" value="Angular2">`,
  styles: [`.myClass{
    color:red
  }`]
})
export class TutorialsComponent  {
 public title = 'Class and Style Binding';
 public imgLink = 'http://lorempixel.com/400/200';
 public applyclass = true;
 public applyblue = true;
}
