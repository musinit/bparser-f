import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {InitialComponent} from './initial/initial.component';
import {PolicyComponent} from './policy/policy.component';
import {DemoComponent} from './demo/demo.component';

const routes: Routes = [
  {
    path: '',
    component: InitialComponent,
  },
  {
    path: 'dashboard/:id',
    component: DashboardComponent,
  },
  {
    path: 'policy',
    component: PolicyComponent,
  },
  {
    path: 'demo',
    component: DemoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
