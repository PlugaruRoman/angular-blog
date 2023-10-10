import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { adminGuestGuard } from './guards/admin-guest.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('./routing/home/home.module').then(
            (module) => module.HomeModule
          ),
      },
      {
        path: 'admin/auth',
        canActivate: [adminGuestGuard],
        loadChildren: () =>
          import('./routing/admin-auth/admin-auth.module').then(
            (module) => module.AdminAuthModule
          ),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./routing/admin/admin.module').then(
            (module) => module.AdminModule
          ),
      },
      {
        path: '**',
        loadChildren: () =>
          import('./routing/not-found/not-found.module').then(
            (module) => module.NotFoundModule
          ),
      },
    ]),
  ],
})
export class WebsiteModule {}
