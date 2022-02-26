import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLogsContentComponent } from './settings-logs-content.component';

describe('SettingsLogsContentComponent', () => {
  let component: SettingsLogsContentComponent;
  let fixture: ComponentFixture<SettingsLogsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsLogsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsLogsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
