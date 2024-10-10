import { AfterViewInit, Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ValueChangeEvent,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatChipEvent,
  MatChipInputEvent,
  MatChipsModule,
} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrl: './chart-component.component.scss',
  host: {
    class: 'app-host',
  },
  standalone: true,
  imports: [
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
  ],
})
export class ChartComponentComponent implements AfterViewInit {
  chipsList: string[] = ['apple', 'mango', 'orange'];
  chipGridItemList: string[] = [];

  // Chip option list
  chipOptionListFormControl = new FormControl();

  chipGridFormControl = new FormControl();

  // username form control
  loginFormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-z]{4,}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      this.customerPasswordValidator,
    ]),
  });

  constructor() {
    // observe chip option changes
    this.chipOptionListFormControl.valueChanges.subscribe({
      next: (value) => {
        console.log(value);
      },
    });

    // this.chipGridFormControl.valueChanges.subscribe({
    //   next: (value) => {
    //     this.chipGridItemList.push(value);
    //   },
    // });
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.chipOptionListFormControl.disable();
    //   setTimeout(() => {
    //     this.chipOptionListFormControl.enable();
    //   }, 3000);
    // }, 3000);

    setTimeout(() => {
      this.chipOptionListFormControl.setValue([
        this.chipsList[0],
        this.chipsList[1],
      ]);
    }, 3000);
  }

  customerPasswordValidator(control: AbstractControl) {
    const value = control.value;
    const regex = /^[a-z]{4,}$/;

    if (!regex.test(value)) {
      return { invalidPassword: true };
    }
    return null;
  }

  addChipGridItem(event: MatChipInputEvent) {
    this.chipGridItemList.push(event.value);
    event.chipInput.clear();
  }

  removeChip(fruit: string) {
    this.chipsList = this.chipsList.filter((c) => c != fruit);
  }

  removeChipGripItem(item: string) {
    this.chipGridItemList = this.chipGridItemList.filter((c) => c != item);
  }

  changeToDarkMode() {
    document.body.setAttribute('mode', 'dark');
  }
}
