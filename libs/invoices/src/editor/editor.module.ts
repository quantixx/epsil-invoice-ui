//

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EditorLayoutComponent } from './components/editor-layout/editor-layout.component';
import { EditorViewComponent } from './containers/editor-view/editor-view.component';
import { TenantViewComponent } from './containers/tenant-view/tenant-view.component';

//

@NgModule({
  declarations: [EditorViewComponent, EditorLayoutComponent, TenantViewComponent],
  imports: [CommonModule]
})
export class EditorModule {}
