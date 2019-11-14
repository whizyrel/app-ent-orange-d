import { TestBed } from '@angular/core/testing';

import { AppDetailsService } from './app-details.service';

describe('AppDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppDetailsService = TestBed.get(AppDetailsService);
    expect(service).toBeTruthy();
  });
});
