import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundAppRootComponent } from './playground-app-root/playground-app-root.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PlaygroundAppRootComponent, PlaygroundAppRootComponent, NavbarComponent],
  exports: [PlaygroundAppRootComponent]
})
export class CoreModule {}

export { PlaygroundAppRootComponent };
