import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayInMonthSelectionContentComponent } from './day-in-month-selection-content.component';

describe('DayInMonthSelectionContentComponent', () => {
  let component: DayInMonthSelectionContentComponent;
  let fixture: ComponentFixture<DayInMonthSelectionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayInMonthSelectionContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayInMonthSelectionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
