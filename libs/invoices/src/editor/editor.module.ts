//

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientViewComponent } from './containers/client-view/client-view.component';
import { EditorLayoutComponent } from './components/editor-layout/editor-layout.component';
import { EditorViewComponent } from './containers/editor-view/editor-view.component';
import { TenantViewComponent } from './containers/tenant-view/tenant-view.component';
import { InvoiceTableViewComponent } from './containers/invoice-table-view/invoice-table-view.component';

//

@NgModule({
  declarations: [EditorViewComponent, EditorLayoutComponent, TenantViewComponent, ClientViewComponent, InvoiceTableViewComponent],
  imports: [CommonModule]
})
export class EditorModule {}
