import { Component } from '@angular/core';

import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent {
  cost = 0;
  value = 0;
  change = 0;
  stocks: any = [];
  length = 0;

  constructor(private accountService: AccountService) {}

  sell(index): void {

  }
}
