import { createAction, props } from '@ngrx/store';
import { AuthData } from './admin-auth-reducer';

export const login = createAction(
  '[Auth Admin] Login',
  props<{ login: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth Admin] Login Success',
  props<{ authData: AuthData }>()
);

export const loginFailed = createAction(
  '[Auth Admin] Login Failed',
  props<{ serverError: string }>()
);

export const initAdminAuth = createAction('[Auth Admin] Init admin auth');

export const logoutSuccess = createAction('[Auth Admin] Logout Success');

export const extractLoginData = createAction('[Admin Auth] extract login data');
