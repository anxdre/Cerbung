import { TestBed } from '@angular/core/testing';

import { PastaServiceService } from './pasta-service.service';

describe('PastaServiceService', () => {
  let service: PastaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
