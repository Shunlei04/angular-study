import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-user-list-filter',
  templateUrl: './user-list-filter.component.html',
  styleUrl: './user-list-filter.component.scss',
  host: {
    class: 'app-host',
  },
  standalone: true,
  imports: [
    // Pipes
    DatePipe,

    // Module
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  // providers: [DatePipe],
})
export class UserListFilterComponent {
  // Select Single Option
  selectOptionFormControl = new FormControl();
  selectOptionsList: string[] = [
    'Apple',
    'Orange',
    'Mango',
    'Grape',
    'Strawberry',
  ];

  // Select Single Option
  selectMultipleOptionFormControl = new FormControl();
  selectedOptions: string[] = [];

  dateFormControl = new FormControl();

  pickedDate: string = '';

  dateRangeFormGroup = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  constructor(private datePipe: DatePipe) {
    this.selectOptionFormControl.valueChanges.subscribe({
      next: (value) => {
        console.log(value);
      },
    });

    this.selectMultipleOptionFormControl.valueChanges.subscribe({
      next: (value) => {
        console.log(value);
        this.selectedOptions = value;
      },
    });

    this.dateFormControl.valueChanges.subscribe({
      next: (data) => {
        const dataString = this.datePipe.transform(
          data,
          'MMM dd,yyyy: hh:mm a',
        );
        console.log(dataString);
        this.pickedDate = data;
      },
    });

    // date range
    this.dateRangeFormGroup.valueChanges.subscribe({
      next: (date) => {
        console.log(date);
      },
    });

    // this.dateRangeFormGroup.get('start')?.valueChanges.subscribe({
    //   next: (startDate) => {
    //     console.log(startDate);
    //   },
    // });

    // this.dateRangeFormGroup.get('end')?.valueChanges.subscribe({
    //   next: (endDate) => {
    //     console.log(endDate);
    //   },
    // });
  }

  countOtherOptions() {
    const count = this.selectedOptions.length;
    if (count > 1) {
      if (count == 2) {
        return '(+1 other)';
      } else {
        return `(+${count - 1} others)`;
      }
    } else {
      return '';
    }
  }
}
