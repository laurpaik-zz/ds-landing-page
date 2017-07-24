import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CodemirrorModule } from 'ng2-codemirror';

import { AppComponent } from './app.component';
import { CodemirrorComponent } from './codemirror/codemirror.component';

@NgModule({
  declarations: [
    AppComponent,
    CodemirrorComponent
  ],
  imports: [
    BrowserModule,
    CodemirrorModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
