import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule, PlaygroundAppRootComponent } from 'app/core/core.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  bootstrap: [PlaygroundAppRootComponent]
})
export class AppModule {}
