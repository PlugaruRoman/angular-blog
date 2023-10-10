import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundPagesComponent } from './not-found-pages/not-found-pages.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotFoundPagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '**', component: NotFoundPagesComponent }]),
  ],
})
export class NotFoundModule {}
