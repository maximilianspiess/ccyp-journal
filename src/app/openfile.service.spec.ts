import { TestBed } from '@angular/core/testing';

import { OpenfileService } from './openfile.service';

describe('OpenfileService', () => {
  let service: OpenfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
