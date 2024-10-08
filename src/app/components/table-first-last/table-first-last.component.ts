import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogService } from '../../apps/public/components/dialog/dialog.service';

@Component({
  selector: 'app-table-first-last',
  templateUrl: './table-first-last.component.html',
  styleUrl: './table-first-last.component.scss',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
})
export class TableFirstLastComponent {
  // Input

  // Output
  @Output() onFirstPage = new EventEmitter();
  @Output() onLastPage = new EventEmitter();

  constructor(private dialogService: DialogService) {}

  changeFirstPage() {
    this.onFirstPage.emit(true);
    this.dialogService.openDialog();
  }

  changeLastPage() {
    this.onLastPage.emit(true);
  }
}
