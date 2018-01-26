import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundAppRootComponent } from './playground-app-root/playground-app-root.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PlaygroundAppRootComponent, PlaygroundAppRootComponent],
  exports: [PlaygroundAppRootComponent]
})
export class CoreModule {}

export { PlaygroundAppRootComponent };
