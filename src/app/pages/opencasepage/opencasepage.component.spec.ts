import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencasepageComponent } from './opencasepage.component';

describe('OpencasepageComponent', () => {
  let component: OpencasepageComponent;
  let fixture: ComponentFixture<OpencasepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpencasepageComponent]
    });
    fixture = TestBed.createComponent(OpencasepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
