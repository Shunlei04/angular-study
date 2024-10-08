import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { debounceTime } from 'rxjs';
import { TableFirstLastComponent } from '../../../../components/table-first-last/table-first-last.component';
import { TablePagesComponent } from '../../../../components/table-pages/table-pages.component';
import { UserListService } from './user-list.service';
import { UserType } from './user-list.type';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  host: {
    class: 'app-host',
  },
  standalone: true,
  imports: [
    // Modules
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    ReactiveFormsModule,

    // Components
    TablePagesComponent,
    TableFirstLastComponent,
  ],
})
export class UserListComponent implements OnInit, AfterViewInit {
  @ViewChild('tablePaginator') tablePaginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Form Control
  filterFormControl = new FormControl();

  activePage: number = 1;
  parentPageList: number[] = new Array(10);

  isFirstPage: boolean = true;
  isLastPage: boolean = false;

  userList: UserType[] = [];
  filteredUserList: UserType[] = [];
  dataSource: MatTableDataSource<UserType> = new MatTableDataSource();

  // Display
  displayedColums: string[] = [
    'no',
    'name',
    'age',
    'gender',
    'religion',
    'occupation',
    'menu',
  ];

  constructor(private homeService: UserListService) {
    this.homeService.getUserFromServer().then((users) => {
      this.userList = users;
      this.filterUserList('');
    });

    this.filterFormControl.valueChanges.pipe(debounceTime(800)).subscribe({
      next: (value) => {
        console.log(value);
        this.filterUserList(value);
      },
    });
  }
  ngOnInit(): void {
    // console.log(this.tablePaginator);
  }
  ngAfterViewInit() {
    // console.log(this.tablePaginator);
    this.dataSource.paginator = this.tablePaginator;
    this.dataSource.sort = this.sort;
  }

  pageChanged(pageNo: number) {
    this.activePage = pageNo;
    if (pageNo == 1) {
      this.isFirstPage = true;
      this.isLastPage = false;
    } else if (this.activePage == this.parentPageList.length) {
      this.isLastPage = true;
      this.isFirstPage = false;
    } else {
      this.isFirstPage = false;
      this.isLastPage = false;
    }
  }

  firstPageChanged(first: boolean) {
    this.isFirstPage = first;
    if (first) {
      this.isLastPage = false;
      this.activePage = 1;
    }
  }

  lastPageChanged(last: boolean) {
    this.isLastPage = last;
    if (last) {
      this.isFirstPage = false;
      this.activePage = this.parentPageList.length;
    }
  }

  filterUserList(name: string) {
    this.filteredUserList = [];

    this.filteredUserList = this.userList.filter((u) =>
      u.name.toLowerCase().includes(name.toLowerCase()),
    );

    this.dataSource.data = this.filteredUserList;

    // this.userList.forEach((user) => {
    //   const userNameLC = user.name.toLowerCase();
    //   if (userNameLC.includes(name.toLowerCase())) {
    //     this.filteredUserList.push(user);
    //   }
    // });
  }
}
