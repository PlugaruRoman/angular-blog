import { CanMatchFn } from '@angular/router';

export const adminGuestMatchGuard: CanMatchFn = (route, segments) => {
  return true;
};
