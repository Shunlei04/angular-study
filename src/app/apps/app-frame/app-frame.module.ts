import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppFrameRoutingModule } from './app-frame-routing.module';
import { AppFrameComponent } from './app-frame.component';
import { AppDrawerComponent } from './components/app-drawer/app-drawer.component';

@NgModule({
  declarations: [AppFrameComponent],
  imports: [
    // Module
    CommonModule,
    AppFrameRoutingModule,

    // Component
    AppDrawerComponent,
  ],
})
export class AppFrameModule {}
