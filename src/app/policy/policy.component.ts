import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'tcr-policy-component',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.less']
})
export class PolicyComponent {
  constructor(private router: Router) {
  }
  back() {
    this.router.navigate(['/'])
  }
}
