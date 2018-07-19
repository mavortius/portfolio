import { Component, OnDestroy, OnInit } from '@angular/core';

import { AccountService } from './services/account.service';
import { Stock } from './services/stocks.model';
import { StocksService } from './services/stocks.service';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {
  refresh = true;
  stocks: Stock[] = [];
  interval: any;

  constructor(private accountService: AccountService,
              private alertService: AlertService,
              private stocksService: StocksService) {
  }

  ngOnInit(): void {
    this.accountService.init();
    this.load();

    this.interval = setInterval(() => {
      if (this.refresh) {
        this.load();
      }
    }, 15000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  toggleRefresh(): void {
    this.refresh = !this.refresh;
    const onOff = (this.refresh) ? 'on' : 'off';

    this.alertService.alert(`You have turned automatic refresh ${onOff}`, 'info', 0);
  }

  reset(): void {
    this.accountService.reset();
    this.alertService.alert('You have reset your portfolio!');
  }

  private load(): void {
    this.stocksService.getStocks()
      .subscribe(stocks =>
          this.stocks = stocks,
        error => console.error(`There was an error loading stocks: ${error}`));
  }
}
