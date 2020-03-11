import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WorkoutServiceService } from 'src/app/services/workout-service.service';
import { SearchResult, Data } from './WorkOutInterface';
import { WorkoutService } from 'src/app/services/workouts.service';
import { AuthService } from 'src/app/services/auth.service';
import { IWorkout } from 'src/app/interfaces/IExercise';

@Component({
  selector: 'app-workout-tracker',
  templateUrl: './workout-tracker.page.html',
  styleUrls: ['./workout-tracker.page.scss'],
})
export class WorkoutTrackerPage implements OnInit {
  isLoaded: boolean = false;
  constructor(
    private _service: WorkoutService,
    private _authService: AuthService
  ) {}
  
  ngOnInit(): void {
  }

  Workouts: IWorkout[];

  getWorkouts() {
    this._authService.getWorkouts().subscribe(data => {
      this.Workouts = data;
      this.isLoaded = true;
    });
  }
  
  ionViewDidEnter() {
    this.getWorkouts();
  }

}
