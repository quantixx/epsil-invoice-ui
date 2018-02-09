import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoicesModule, INVOICES_ROUTES } from '@epsil-invoice-ui/invoices';

//

const routes: Routes = [{ path: '', children: INVOICES_ROUTES }];

@NgModule({
  imports: [InvoicesModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule {}
