import { TestBed } from '@angular/core/testing';

import { TapUtilsService } from './tap-utils.service';

describe('TapUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TapUtilsService = TestBed.get(TapUtilsService);
    expect(service).toBeTruthy();
  });
});
