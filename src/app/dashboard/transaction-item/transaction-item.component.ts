import {Component, Input} from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {flipInY} from 'ng-animate';
import {Transaction} from '../../models/transaction';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'tcr-transaction-item-component',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.less'],
  animations: [
    trigger('tada', [transition('* => play', useAnimation(flipInY, {
      params: { timing: 0.3 }
    }))]),
  ],
})
export class TransactionItemComponent {
  isHovered = false;
  @Input() transaction: Transaction;
  @Input() currentAddress: string | undefined;
  isInfoVisible = false;

  constructor(public dialog: MatDialog) {
  }

  onMouserEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  get blockHash(): string {
    return this.transaction ? this.transaction.blockHash.slice(0, 5) + '...'+
        this.transaction.blockHash.slice(this.transaction.blockHash.length - 5, this.transaction.blockHash.length) : '-';
  }

  onShowInfo(val: boolean) {
    this.isInfoVisible = val;
  }

}
