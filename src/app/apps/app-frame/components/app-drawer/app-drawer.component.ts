import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { AppDrawerService } from './app-drawer.service';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { OnComponentDestroy } from '../../../tools/on-destroy.tool';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-app-drawer',
  templateUrl: './app-drawer.component.html',
  styleUrl: './app-drawer.component.scss',
  standalone: true,
  host: {
    class: 'app-host',
  },
  imports: [
    MatDrawerContent,
    MatDrawerContainer,
    MatSidenavModule,
    MatButtonModule,
    RouterOutlet,
    PortalModule,
  ],
})
export class AppDrawerComponent implements AfterViewInit {
  @ViewChild('drawer') private drawer!: MatDrawer;

  // Selected portal
  selectedPortal: ComponentPortal<any> | null = null;

  drawerWidth: string = '';

  private onDestroy = OnComponentDestroy();

  constructor(private appDrawerService: AppDrawerService) {
    this.appDrawerService.portalComponentObservable();

    this.appDrawerService
      .portalComponentObservable()
      .pipe(takeUntil(this.onDestroy))
      .subscribe({
        next: (component) => {
          setTimeout(() => {
            if (component) {
              this.selectedPortal = new ComponentPortal(component);
            } else {
              this.selectedPortal = null;
            }
          });
        },
      });

    this.appDrawerService
      .drawerWidthObservable()
      .pipe(takeUntil(this.onDestroy))
      .subscribe({
        next: (width) => {
          setTimeout(() => {
            this.drawerWidth = width;
          });
        },
      });
  }

  ngAfterViewInit(): void {
    // this.drawer.disableClose = true;

    this.appDrawerService
      .drawerStatusObservable()
      .pipe(takeUntil(this.onDestroy))
      .subscribe({
        next: (status) => {
          setTimeout(() => {
            if (status) {
              this.drawer.open();
            } else {
              this.drawer.close();
            }
          });
        },
      });

    // setTimeout(() => {
    //   this.drawer.open();
    // });
  }

  closeDrawer() {
    this.drawer.close();
  }
}
