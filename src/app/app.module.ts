import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewComponent } from './new-component/new-component.component';
import { AnotherComponentComponent } from './another-component/another-component.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    AnotherComponentComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AnotherComponentComponent]
})
export class AppModule {
    
 }
