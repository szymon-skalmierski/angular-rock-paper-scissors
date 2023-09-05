import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OpponentComponent } from './opponent/opponent.component';
import { OptionsComponent } from './options/options.component';
import { OptionComponent } from './options/option/option.component';

@NgModule({
  declarations: [
    AppComponent,
    OpponentComponent,
    OptionsComponent,
    OptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
