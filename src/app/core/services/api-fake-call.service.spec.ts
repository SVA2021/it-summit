import { TestBed } from '@angular/core/testing';

import { ApiFakeCallService } from './api-fake-call.service';

describe('ApiFakeCallService', () => {
  let service: ApiFakeCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFakeCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
