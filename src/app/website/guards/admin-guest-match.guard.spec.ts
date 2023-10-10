import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { adminGuestMatchGuard } from './admin-guest-match.guard';

describe('adminGuestMatchGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminGuestMatchGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
