import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsCreatePopupComponent } from './sessions-create-popup.component';

describe('SessionsCreatePopupComponent', () => {
  let component: SessionsCreatePopupComponent;
  let fixture: ComponentFixture<SessionsCreatePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionsCreatePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsCreatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
