import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'tcr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private fb: FormBuilder,
              private router: Router) {}

  redirectOnDashboard(id: string) {
    this.router.navigate([`dashboard/${id}`]);
  }
}
