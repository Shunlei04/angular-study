import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../services/dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialogRef: MatDialog) {}

  openDialog() {
    const dialog = this.dialogRef.open(DialogComponent, {
      data: {
        get dialog() {
          return dialog;
        },
        userName: 'AND',
      },
    });
  }
}
