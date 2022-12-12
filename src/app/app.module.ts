import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHightlightDirective } from './basic-highlight/basic-hightlight.directive';
import { BetterHightlightDirective } from './better-hightlight/better-hightlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHightlightDirective,
    BetterHightlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
