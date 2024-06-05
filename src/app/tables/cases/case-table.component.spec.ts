import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTableComponent } from './case-table.component';

describe('TableComponent', () => {
  let component: CaseTableComponent;
  let fixture: ComponentFixture<CaseTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseTableComponent]
    });
    fixture = TestBed.createComponent(CaseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
