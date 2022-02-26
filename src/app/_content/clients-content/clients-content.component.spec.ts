import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsContentComponent } from './clients-content.component';

describe('ClientsContentComponent', () => {
  let component: ClientsContentComponent;
  let fixture: ComponentFixture<ClientsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
