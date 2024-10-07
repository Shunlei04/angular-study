import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const appFrameGuard: CanActivateFn = (route, state) => {
  // console.log('Cannot activate!');
  // return true;

  const allow = false;
  const router = inject(Router);

  if (allow) {
    return true;
  } else {
    return false;
  }
};
