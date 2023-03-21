import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Forms1Component } from './components/forms1/forms1.component';
import { Forms2Component } from './components/forms2/forms2.component';



@NgModule({
  declarations: [
    AppComponent,
    Forms1Component,
    Forms2Component

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
