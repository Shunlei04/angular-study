import { Component } from '@angular/core';
import { TablePagesComponent } from '../../../../components/table-pages/table-pages.component';
import { TableFirstLastComponent } from '../../../../components/table-first-last/table-first-last.component';
import { UserListService } from './user-list.service';
import { UserType } from './user-list.type';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  host: {
    class: 'app-host',
  },
  standalone: true,
  imports: [
    // Components
    TablePagesComponent,
    TableFirstLastComponent,
  ],
})
export class UserListComponent {
  activePage: number = 1;
  parentPageList: number[] = new Array(10);

  isFirstPage: boolean = true;
  isLastPage: boolean = false;

  userList: UserType[] = [];

  constructor(private homeService: UserListService) {
    this.homeService.getUserFromServer().then((users) => {
      this.userList = users;
    });
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
}
