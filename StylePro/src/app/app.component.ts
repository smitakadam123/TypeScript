
import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome To Tutorial....</h1>
              <app-tutorials></app-tutorials>
              <app-event-binding></app-event-binding>
              <app-two-way-binding></app-two-way-binding>`
})
export class AppComponent {
}
