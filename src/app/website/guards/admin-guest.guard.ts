import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AdminAuthService } from 'src/app/store/admin-auth-store/services/admin-auth.service';
import { first, map } from 'rxjs';

export const adminGuestGuard: CanActivateFn = (route, state) => {
  const currentUserService = inject(AdminAuthService);
  const router = inject(Router);

  return currentUserService.isAuth$.pipe(
    first(),
    map((isAuth) => {
      if (!isAuth) {
        router.navigateByUrl('/admin/auth/login');
        return isAuth;
      }
      return isAuth;
    })
  );
};
