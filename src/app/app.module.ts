import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//CONFIGURACIÓN DEL LOCALE DE LA APP
import localeEsMX from '@angular/common/locales/es-MX';
import localeEsKR from '@angular/common/locales/ko';

import { registerLocaleData } from '@angular/common';

registerLocaleData ( localeEsMX );
registerLocaleData ( localeEsKR );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-MX'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
