import { NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { TickerComponent } from './ticker/ticker.component';
import { StocksComponent } from './stocks/stocks.component';
import { InvestmentsComponent } from './investments/investments.component';
import { StocksInterceptor } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentsComponent,
    TickerComponent,
    StocksComponent,
    AlertComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
  ],
  providers: [
    CurrencyPipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StocksInterceptor,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
