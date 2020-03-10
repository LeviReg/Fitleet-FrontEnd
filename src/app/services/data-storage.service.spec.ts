import { TestBed } from '@angular/core/testing';

import { WorkoutService } from './workouts.service';

describe('DataStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkoutService = TestBed.get(WorkoutService);
    expect(service).toBeTruthy();
  });
});
