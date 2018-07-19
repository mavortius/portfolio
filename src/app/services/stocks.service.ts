import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

import { ConfigService } from './config.service';
import { Stock } from './stocks.model';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) {
  }

  getStocks(): Observable<Array<Stock>> {
    return this.http.get<Array<Stock>>(ConfigService.get('api'));
  }
}
