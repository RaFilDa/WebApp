import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSourceContentComponent } from './config-source-content.component';

describe('ConfigSourceContentComponent', () => {
  let component: ConfigSourceContentComponent;
  let fixture: ComponentFixture<ConfigSourceContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigSourceContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigSourceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
