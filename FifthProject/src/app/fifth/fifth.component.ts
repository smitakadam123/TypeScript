import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {


@Output()
emi:EventEmitter<string>

  constructor() { 
this.emi=new EventEmitter<string>() 
  }

  ngOnInit() {
  }

  buttonClick(x:string){
    this.emi.emit(x)
  }

}
