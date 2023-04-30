import { TestBed } from '@angular/core/testing';

import { RunningService } from './running.service';

describe('RunningService', () => {
  let service: RunningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
