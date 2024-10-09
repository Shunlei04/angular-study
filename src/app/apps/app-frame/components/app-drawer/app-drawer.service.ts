import { ComponentType } from '@angular/cdk/portal';
import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserListComponent } from '../../../public/components/user-list/user-list.component';

@Injectable({
  providedIn: 'root',
})
export class AppDrawerService {
  private drawerSatausSub = new BehaviorSubject<boolean>(false);
  private drawerWidthSub = new BehaviorSubject<string>('fit-content');
  private portalSub =
    new BehaviorSubject<ComponentType<Component | null> | null>(null);

  constructor() {}

  drawerStatusObservable() {
    return this.drawerSatausSub.asObservable();
  }

  openDrawer() {
    this.drawerSatausSub.next(true);
  }

  closeDrawer() {
    this.drawerSatausSub.next(false);
  }

  drawerWidthObservable() {
    return this.drawerWidthSub.asObservable();
  }

  setDrawerWidth(width: string = 'fit-content') {
    this.drawerWidthSub.next(width);
  }

  portalComponentObservable() {
    return this.portalSub.asObservable();
  }

  setPortalComponent(Component: ComponentType<any> | null) {
    this.portalSub.next(Component);
  }
}
