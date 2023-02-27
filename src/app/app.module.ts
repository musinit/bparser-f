import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatNativeDateModule, MatRadioModule,
  MatSlideToggleModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InitialComponent } from './initial/initial.component';
import { ChartsModule } from 'ng2-charts';
import { ParserService } from './services/parser.service';
import {MatSelectModule} from '@angular/material/select';
import {TransactionItemComponent} from './dashboard/transaction-item/transaction-item.component';
import {TruncatePipe} from './pipes/truncate.pipe';
import {AutofocusDirective} from './directives/autofocus.directive';
import {PolicyComponent} from './policy/policy.component';
import {DemoComponent} from './demo/demo.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    InitialComponent,
    DashboardComponent,
    TransactionItemComponent,
    AutofocusDirective,
    PolicyComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
  ],
  providers: [ParserService,  MatNativeDateModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
