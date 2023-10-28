import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/admin-auth-store/store/admin-auth-actions';
import {
  getError,
  getLoaded,
  getLoading,
} from 'src/app/store/admin-auth-store/store/admin-auth-selectors';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-login-block',
  templateUrl: './admin-login-block.component.html',
  styleUrls: ['./admin-login-block.component.scss'],
})
export class AdminLoginBlockComponent implements OnInit {
  serverError$ = this.store$.select(getError);
  loading$ = this.store$.select(getLoading);
  loaded$ = this.store$.select(getLoaded);

  constructor(private store$: Store, private httpClient: HttpClient) {}

  ngOnInit(): void {}

  onLogin(value: { login: string; password: string }) {
    this.store$.dispatch(login(value));
  }

  onTest() {
    this.httpClient
      .get('http://localhost:3000/auth/profile')
      .subscribe(console.log);
  }
}
