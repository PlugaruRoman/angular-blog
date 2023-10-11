import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginBlockComponent } from './admin-login-block.component';

describe('AdminLoginBlockComponent', () => {
  let component: AdminLoginBlockComponent;
  let fixture: ComponentFixture<AdminLoginBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLoginBlockComponent]
    });
    fixture = TestBed.createComponent(AdminLoginBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
