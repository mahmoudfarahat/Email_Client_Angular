import { TestBed } from '@angular/core/testing';

import { EmailResloverService } from './email-reslover.service';

describe('EmailResloverService', () => {
  let service: EmailResloverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailResloverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
