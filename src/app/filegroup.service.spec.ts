import { TestBed } from '@angular/core/testing';

import { FilegroupService } from './filegroup.service';

describe('FilegroupService', () => {
  let service: FilegroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilegroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
