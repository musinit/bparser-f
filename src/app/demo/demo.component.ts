import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'tcr-demo-component',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit{
  constructor(public sanitizer: DomSanitizer) { }

  isShowTaxcry = false;

  url =
    'https://taxcry.io/dashboard/b313ac0a-bf3a-4dd8-9106-62b00126071d';
  urlSafe: SafeResourceUrl;

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl('https://taxcry.io/dashboard/b313ac0a-bf3a-4dd8-9106-62b00126071d');
  }

  onShowTaxcry() {
    this.isShowTaxcry = !this.isShowTaxcry;
  }
}
