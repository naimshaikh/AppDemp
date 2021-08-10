import { TestBed } from '@angular/core/testing';

import { PortalConsistingService } from './portal-consisting.service';

describe('PortalConsistingService', () => {
  let service: PortalConsistingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalConsistingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
