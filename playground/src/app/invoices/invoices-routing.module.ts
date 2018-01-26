import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  InvoicesRootComponent,
  InvoicesModule
} from '@epsil-invoice-ui/invoices';

//

const routes: Routes = [{ path: '', component: InvoicesRootComponent }];

@NgModule({
  declarations: [],
  imports: [InvoicesModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule {}
