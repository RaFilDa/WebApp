import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigCreatePopupComponent } from './config-create-popup.component';

describe('ConfigCreatePopupComponent', () => {
  let component: ConfigCreatePopupComponent;
  let fixture: ComponentFixture<ConfigCreatePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigCreatePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigCreatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
