import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySelectionContentComponent } from './day-selection-content.component';

describe('DaySelectionContentComponent', () => {
  let component: DaySelectionContentComponent;
  let fixture: ComponentFixture<DaySelectionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaySelectionContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaySelectionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
