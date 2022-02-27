import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronContentComponent } from './cron-content.component';

describe('CronContentComponent', () => {
  let component: CronContentComponent;
  let fixture: ComponentFixture<CronContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CronContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
