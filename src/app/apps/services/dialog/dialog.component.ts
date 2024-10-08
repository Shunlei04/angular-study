import { DIALOG_DATA } from '@angular/cdk/dialog';
import { AfterViewInit, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  standalone: true,
  imports: [MatDialogModule],
})
export class DialogComponent {
  constructor(@Inject(DIALOG_DATA) private dialog: any) {
    setTimeout(() => {
      console.log(this.dialog);
    });
  }

}
