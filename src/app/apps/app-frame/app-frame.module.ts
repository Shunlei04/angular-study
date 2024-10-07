import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppFrameRoutingModule } from './app-frame-routing.module';
import { AppFrameComponent } from './app-frame.component';

@NgModule({
  declarations: [AppFrameComponent],
  imports: [CommonModule, AppFrameRoutingModule],
})
export class AppFrameModule {}
