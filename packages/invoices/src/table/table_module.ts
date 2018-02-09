//

import { NgModule } from '@angular/core';
import { ItemComponent } from './item_component';
import { TableComponent } from './table_component';

//

@NgModule({
  declarations: [TableComponent, ItemComponent],
  exports: [TableComponent]
})
export class TableModule {}
