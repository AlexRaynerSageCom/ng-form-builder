import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localeEnGb from '@angular/common/locales/en-GB';

import { CoreModule } from '@core/core.module';

import { AppComponent } from './app.component';

registerLocaleData(localeEnGb);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
