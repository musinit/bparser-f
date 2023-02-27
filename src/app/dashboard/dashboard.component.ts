import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ParserService} from '../services/parser.service';
import {first, map} from 'rxjs/internal/operators';
import {Transaction} from '../models/transaction';


@Component({
  selector: 'tcr-dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  PING_RELOAD_PERIOD_IN_MS = 1000;
  MAXIMUM_TRANSACTIONS = 100;
  currendAddress: string | undefined;
  transactions: Transaction[] | undefined;

  constructor(private router: Router,
              private parserService: ParserService,
              private activatedRoute: ActivatedRoute,
              private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      map(params => params['id']),
    ).pipe(first()).subscribe(addrs => {
      this.currendAddress = addrs;
      this.updateDashboardData(addrs);
      setInterval(() => {
        this.updateDashboardData(addrs);
      }, this.PING_RELOAD_PERIOD_IN_MS);
    });
  }

  ngAfterViewInit() {
  }

  onUpdateDashboard() {
    this.updateDashboardData(this.currendAddress);
  }

  onLogoClick() {
    this.router.navigate(['/']);
  }

  private updateDashboardData(address: string) {
    this.updateAllTransactions(address);
  }

  onGoTo(url) {
    window.open(url, '_blank');
  }

  private updateAllTransactions(address: string) {
    this.parserService.getTransactions(address).pipe(first()).subscribe(results => {
      if (results) {
        this.transactions = Object.assign([], results);
        this.cd.detectChanges();
      }
    });
  }
}
