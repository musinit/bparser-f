import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs/index';
import {Transaction} from '../models/transaction';
import {AddressRequest} from '../models/address-request';
import {Overview} from '../models/overview';

@Injectable()
export class ParserService {
  API_URL = environment.api;
  PARSER_URL = this.API_URL + '/parser';

  constructor(private httpClient: HttpClient) {}

  subscribeAddrs(addrs: string): Observable<string> {
    const request = {
      address: addrs
    } as AddressRequest;
    return this.httpClient.post<string>(encodeURI(`${this.PARSER_URL}/subscription`), request)
      .pipe(
        map(a => a['payload'])
      );
  }
  getTransactions(addrs: string): Observable<Transaction[]> {
    const request = {
      address: addrs
    } as AddressRequest;
    return this.httpClient.post<Transaction[]>(encodeURI(`${this.PARSER_URL}/transactions`), request)
      .pipe(
        map(v => {
          return (JSON.parse(JSON.stringify(v)).payload) as Transaction[];
        })
      );
  }

    getOverview(): Observable<Overview> {
        return this.httpClient.get<Overview>(encodeURI(`${this.PARSER_URL}/overview`))
            .pipe(
                map(v => {
                    return (JSON.parse(JSON.stringify(v)).payload) as Overview;
                })
            );
    }

  getAllAddresses(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(encodeURI(`${this.API_URL}/address`))
      .pipe(
        map(v => {
          return (JSON.parse(JSON.stringify(v)).payload) as Transaction[];
        })
      );
  }

  getCurrentBlockNumber(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(encodeURI(`${this.PARSER_URL}/blocks/current`))
        .pipe(
            map(v => {
              return (JSON.parse(JSON.stringify(v)).payload) as Transaction[];
            })
        );
  }
}

