import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasepageComponent } from './casepage.component';

describe('CasepageComponent', () => {
  let component: CasepageComponent;
  let fixture: ComponentFixture<CasepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasepageComponent]
    });
    fixture = TestBed.createComponent(CasepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
