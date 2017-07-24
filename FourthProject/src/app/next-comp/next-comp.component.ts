import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-next-comp',
  templateUrl: './next-comp.component.html',
  styleUrls: ['./next-comp.component.css']
})
export class NextCompComponent implements OnInit {
@Input()
imgNm:string;

  constructor() { }

  ngOnInit() {
  }

}
