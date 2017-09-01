import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-in-com',
  template: `
    <div class="row">
     <div class="col-md-12" class.well="isThere">
       This is Work
     </div>
    </div>
  `,
  styles: []
})
export class InComComponent implements OnInit {

  @Input()
  isThere: boolean;
  constructor() { }

  ngOnInit() {
  }

}
