import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
})
export class PublicComponent {
  @HostBinding('class.app-host') value: number = 1;
}
