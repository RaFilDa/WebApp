import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsGeneralContentComponent } from './settings-general-content.component';

describe('SettingsGeneralContentComponent', () => {
  let component: SettingsGeneralContentComponent;
  let fixture: ComponentFixture<SettingsGeneralContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsGeneralContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsGeneralContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
