import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
@Output()
imgVal:EventEmitter<string>;

  constructor() {
    this.imgVal=new EventEmitter<string>();
   }

  ngOnInit() {
  }
  showImage(){
   
    
    this.imgVal.emit('a.png');
  }

}
