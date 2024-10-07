import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  standalone: true,
  imports: [],
})
export class NotFoundComponent {
  @HostBinding('class.app-host') value: number = 1;
}
