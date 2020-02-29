import { TestBed } from '@angular/core/testing';

import { WorkoutStorageService } from './workout-storage.service';

describe('WorkoutStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkoutStorageService = TestBed.get(WorkoutStorageService);
    expect(service).toBeTruthy();
  });
});
