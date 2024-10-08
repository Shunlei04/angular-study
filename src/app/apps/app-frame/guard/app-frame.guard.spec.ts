import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { appFrameGuard } from './app-frame.guard';

describe('appFrameGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => appFrameGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
