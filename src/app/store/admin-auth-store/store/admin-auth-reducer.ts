import { createReducer, on } from '@ngrx/store';
import {
  login,
  loginFailed,
  loginSuccess,
  logoutSuccess,
} from './admin-auth-actions';

export const ADMIN_AUTH_FEATURENAME = 'admin-auth';

export interface AuthData {
  accessToken: string;
  id?: number;
  iat?: number;
  exp?: number;
}

export interface AdminAuthState {
  loading: boolean;
  loaded: boolean;
  serverError: string;
  authData?: AuthData | null;
}

const initialState: AdminAuthState = {
  loading: false,
  loaded: false,
  serverError: '',
};

export const adminAuthReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, loading: true })),

  on(loginSuccess, (state, { authData }) => ({
    ...state,
    authData,
    loading: false,
    loaded: true,
    serverError: '',
  })),

  on(loginFailed, (state, { serverError }) => ({
    ...state,
    authData: null,
    loading: false,
    loaded: true,
    serverError,
  })),

  on(logoutSuccess, () => ({
    ...initialState,
    authData: null,
  }))
);
