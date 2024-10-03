import { Component } from '@angular/core';
import { TablePagesComponent } from '../../components/table-pages/table-pages.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    // Components
    TablePagesComponent,
  ],
})
export class HomeComponent {
  parentPageList: number[] = new Array(10);
}
