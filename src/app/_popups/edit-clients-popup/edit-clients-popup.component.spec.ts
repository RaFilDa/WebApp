import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientsPopupComponent } from './edit-clients-popup.component';

describe('EditClientsPopupComponent', () => {
  let component: EditClientsPopupComponent;
  let fixture: ComponentFixture<EditClientsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClientsPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
