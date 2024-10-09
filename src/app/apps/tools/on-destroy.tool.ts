import { DestroyRef, inject } from '@angular/core';
import { Subject } from 'rxjs';

export function OnComponentDestroy() {
  const subject = new Subject<void>();

  inject(DestroyRef).onDestroy(() => {
    subject.next();
    subject.complete();
    // subject.unsubscibe();
  });
  return subject.asObservable();
}
