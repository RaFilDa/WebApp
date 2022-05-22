import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsContentComponent } from './sessions-content.component';

describe('SessionsContentComponent', () => {
  let component: SessionsContentComponent;
  let fixture: ComponentFixture<SessionsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
