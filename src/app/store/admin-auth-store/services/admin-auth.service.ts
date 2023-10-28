import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, filter, map } from 'rxjs';
import { AuthData } from '../store/admin-auth-reducer';
import { Store, select } from '@ngrx/store';
import { getAuthData } from '../store/admin-auth-selectors';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  isAuth$ = this.store$.pipe(
    select(getAuthData),
    filter((authData) => authData !== undefined),
    map((authData) => !!authData)
  );

  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService,
    private store$: Store
  ) {}

  login(body: { login: string; password: string }) {
    return this.httpClient
      .post<{ accessToken: string }>('http://localhost:3000/auth/login', body)
      .pipe(
        map((res) => ({
          ...res,
          ...this.jwtHelperService.decodeToken(res.accessToken),
        }))
      );
  }

  refresh(): Observable<AuthData> {
    return this.httpClient
      .post<{ accessToken: string }>('http://localhost:3000/auth/refresh', {})
      .pipe(
        map((res) => ({
          ...res,
          ...this.jwtHelperService.decodeToken(res.accessToken),
        }))
      );
  }
}
