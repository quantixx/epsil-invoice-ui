import {Component} from '@angular/core';

interface InvoiceLine {
  quantity: number;
  price: number;
}

@Component({
  selector: 'epsil-invoice-table-view',
  styleUrls: ['./invoice-table-view.component.scss'],
  templateUrl: './invoice-table-view.component.html'
})
export class InvoiceTableViewComponent {
  public invoiceLines: Array<{}> = [{}];

  public addLine() {
    this.invoiceLines = this.invoiceLines.concat([{}]);
  }

  public removeLine(index: number) {
    this.invoiceLines = this.invoiceLines.filter((_, i) => i !== index);
  }

  public sumTotal(invoiceLines: InvoiceLine[]) {
    return invoiceLines.reduce(
      (acc, invoiceLine) => acc + invoiceLine.quantity * invoiceLine.price,
      0
    )
  }
}
