import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-app-frame',
  templateUrl: './app-frame.component.html',
  styleUrl: './app-frame.component.scss',
})
export class AppFrameComponent {
  @HostBinding('class.app-host') value: number = 1;
}
