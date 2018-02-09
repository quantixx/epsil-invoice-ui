//

import { NgModule } from '@angular/core';
import { InvoicesRootComponent } from './invoice_component';
import { TableModule } from './table/table_module';

//

@NgModule({
  declarations: [InvoicesRootComponent],
  imports: [TableModule]
})
export class InvoicesModule {}
