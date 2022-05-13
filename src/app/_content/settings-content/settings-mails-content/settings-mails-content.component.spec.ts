import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMailsContentComponent } from './settings-mails-content.component';

describe('SettingsMailsContentComponent', () => {
  let component: SettingsMailsContentComponent;
  let fixture: ComponentFixture<SettingsMailsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsMailsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
