import { TestBed } from '@angular/core/testing';

import { ConfigsServiceService } from './configs-service.service';

describe('ConfigsServiceService', () => {
  let service: ConfigsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
