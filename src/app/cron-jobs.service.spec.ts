import { TestBed } from '@angular/core/testing';

import { CronJobsService } from './cron-jobs.service';

describe('CronJobsService', () => {
  let service: CronJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CronJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
