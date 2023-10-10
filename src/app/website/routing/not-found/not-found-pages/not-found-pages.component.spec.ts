import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPagesComponent } from './not-found-pages.component';

describe('NotFoundPagesComponent', () => {
  let component: NotFoundPagesComponent;
  let fixture: ComponentFixture<NotFoundPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundPagesComponent]
    });
    fixture = TestBed.createComponent(NotFoundPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
