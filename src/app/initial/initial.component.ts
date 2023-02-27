import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ParserService } from '../services/parser.service';
import {first} from 'rxjs/internal/operators';


@Component({
  selector: 'tcr-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.less']
})
export class InitialComponent implements OnInit, OnDestroy {

  numOfTransactions = 0;
  latestBlockNum = 0;

  constructor(private fb: FormBuilder,
              private parserService: ParserService,
              private router: Router) {
  }

  curlerForm = this.fb.group({
    addrs:  ['', Validators.pattern('^0x.*')],
  });
  overviewUpdate: any;

  ngOnInit(): void {
    this.overviewUpdate = setInterval(() => this.processOverview(), 1000);
  }

  subscribe() {
    if (!this.curlerForm.valid) {
      return;
    }
    this.parserService.subscribeAddrs(this.curlerForm.controls.addrs.value)
        .pipe(first())
        .subscribe(id => {
          this.redirectOnDashboard(this.curlerForm.controls.addrs.value);
        });
  }

  processOverview() {
    this.parserService.getOverview().pipe(first()).subscribe(overview => {
      this.latestBlockNum = overview.latestBlockNumber;
      this.numOfTransactions = overview.txNum;
    });
  }

  redirectOnDashboard(addrs: string) {
    this.router.navigate([`dashboard/${addrs}`], {queryParams: {
      'initial': true,
      }});
  }

  onDemo() {
    window.open(`https://bparser.verdandi.uno/dashboard/0x76f36d497b51e48a288f03b4c1d7461e92247d5e`, '_self');
  }

  ngOnDestroy() {
    clearInterval(this.overviewUpdate);
  }
}
