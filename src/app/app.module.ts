import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxFileSelectorModule } from 'projects/ngx-file-selector/src/public_api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFileSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
