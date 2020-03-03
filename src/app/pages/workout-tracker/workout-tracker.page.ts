import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WorkoutServiceService } from 'src/app/services/workout-service.service';
import { SearchResult, Data } from './WorkOutInterface';
import { WorkoutService } from 'src/app/services/workouts.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-workout-tracker',
  templateUrl: './workout-tracker.page.html',
  styleUrls: ['./workout-tracker.page.scss'],
})
export class WorkoutTrackerPage implements OnInit {
  constructor(
    private _service: WorkoutService,
    private _authService: AuthService
  ) {}

  getWorkouts() {
    this._authService.getWorkouts();
  }
  ngOnInit() {
    console.log(this._authService.getWorkouts());
  }
}
