import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiebannerComponent } from './cookiebanner.component';

describe('CookiebannerComponent', () => {
  let component: CookiebannerComponent;
  let fixture: ComponentFixture<CookiebannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookiebannerComponent]
    });
    fixture = TestBed.createComponent(CookiebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
