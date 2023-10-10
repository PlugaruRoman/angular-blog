import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteModule } from './website/website.module';

@NgModule({
  imports: [RouterModule.forRoot([]), WebsiteModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
