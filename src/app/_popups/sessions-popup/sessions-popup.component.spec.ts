import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsPopupComponent } from './sessions-popup.component';

describe('SessionsPopupComponent', () => {
  let component: SessionsPopupComponent;
  let fixture: ComponentFixture<SessionsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionsPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
