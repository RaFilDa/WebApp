import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDestinationContentComponent } from './config-destination-content.component';

describe('ConfigDestinationContentComponent', () => {
  let component: ConfigDestinationContentComponent;
  let fixture: ComponentFixture<ConfigDestinationContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigDestinationContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigDestinationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
