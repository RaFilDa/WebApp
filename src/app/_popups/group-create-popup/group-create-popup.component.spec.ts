import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCreatePopupComponent } from './group-create-popup.component';

describe('GroupCreatePopupComponent', () => {
  let component: GroupCreatePopupComponent;
  let fixture: ComponentFixture<GroupCreatePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupCreatePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupCreatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
