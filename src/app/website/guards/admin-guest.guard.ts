import { CanActivateFn, CanMatchFn } from '@angular/router';

export const adminGuestGuard: CanActivateFn = (route, state) => {
  return false;
};