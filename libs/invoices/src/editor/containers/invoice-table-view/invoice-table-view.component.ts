import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'epsil-invoice-table-view',
  styleUrls: ['./invoice-table-view.component.scss'],
  templateUrl: './invoice-table-view.component.html'
})
export class InvoiceTableViewComponent {
  public invoiceLines: Array<{}> = [{}];

  constructor(private ref: ChangeDetectorRef) {
  }

  public addLine() {
    this.invoiceLines = this.invoiceLines.concat([{}]);
  }

  public removeLine(index: number) {
    this.invoiceLines = this.invoiceLines.filter((_, i) => i !== index);
  }

  public calculate() {
    this.ref.markForCheck();
  }


}
