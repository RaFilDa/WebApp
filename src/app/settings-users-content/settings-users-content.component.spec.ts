import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsUsersContentComponent } from './settings-users-content.component';

describe('SettingsUsersContentComponent', () => {
  let component: SettingsUsersContentComponent;
  let fixture: ComponentFixture<SettingsUsersContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsUsersContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsUsersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
