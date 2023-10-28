import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginFormUiComponent } from './ui/admin-login-form-ui/admin-login-form-ui.component';
import { AdminLoginBlockComponent } from './blocks/admin-login-block/admin-login-block.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminLoginFormUiComponent, AdminLoginBlockComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  exports: [AdminLoginBlockComponent],
})
export class AdminLoginBlockModule {}
