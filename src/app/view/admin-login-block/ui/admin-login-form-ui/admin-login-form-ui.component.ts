import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login-form-ui',
  templateUrl: './admin-login-form-ui.component.html',
  styleUrls: ['./admin-login-form-ui.component.scss'],
})
export class AdminLoginFormUiComponent implements OnInit {
  formGroup?: FormGroup;

  @Input()
  formError?: string;
  @Output()
  login = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onChangeForm() {
    this.formError = '';
  }

  onSubmit() {
    this.login.emit(this.formGroup?.value);
  }
}
