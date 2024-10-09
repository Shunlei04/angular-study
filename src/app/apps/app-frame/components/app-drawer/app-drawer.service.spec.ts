import { TestBed } from '@angular/core/testing';

import { AppDrawerService } from './app-drawer.service';

describe('AppDrawerService', () => {
  let service: AppDrawerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDrawerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
