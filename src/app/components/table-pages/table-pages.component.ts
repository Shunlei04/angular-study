import {
  Component,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-table-pages',
  templateUrl: './table-pages.component.html',
  styleUrl: './table-pages.component.scss',
  standalone: true,
  imports: [MatButtonModule],
})
export class TablePagesComponent {
  // Input
  @Input() activePage: number = 4;
  @Input() pageList: number[] = new Array(7);

  // Output
  @Output() onPageChanges = new EventEmitter();

  constructor() {}

  selectPage(pageIndex: number) {
    this.onPageChanges.emit(pageIndex + 1);
  }
}
