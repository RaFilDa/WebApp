import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigsContentComponent } from './configs-content.component';

describe('ConfigsContentComponent', () => {
  let component: ConfigsContentComponent;
  let fixture: ComponentFixture<ConfigsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
