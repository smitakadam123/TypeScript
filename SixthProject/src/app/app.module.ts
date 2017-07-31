import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivesStructuralDirective } from './directives-structural.directive';
import { DirectiveComponent } from './src/app/directive/directive.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesStructuralDirective,
    DirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
