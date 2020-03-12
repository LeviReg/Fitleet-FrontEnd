import { Component, OnInit } from '@angular/core';
import { IWorkout, IExercise } from 'src/app/interfaces/IExercise';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { WorkoutService } from 'src/app/services/workouts.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-edit-workout',
  templateUrl: './edit-workout.page.html',
  styleUrls: ['./edit-workout.page.scss'],
})
export class EditWorkoutPage implements OnInit {
  constructor(
    private _authService: AuthService,
    private active: ActivatedRoute,
    private router: Router
  ) {}
  Workout: IWorkout;
  type: string;
  name: string;
  exercises: IExercise[];

  ngOnInit(): void {}

  async getWorkout() {
    await this._authService.getWorkoutID(this.type).subscribe(data => {
      this.Workout = data;
      this.exercises = data.exercises;
      console.log(this.Workout);
    });
    //this._dataStorage.setExercises(this.exercise);
  }

  deleteExercise(name: string) {
    console.log(name);
    this.exercises = this.exercises.filter(e => e._id !== name);
    this._authService.deleteWorkouts(name).subscribe(data => {
      console.log(data);
    });
  }

  ionViewDidEnter() {
    this.type = this.active.snapshot.paramMap.get('type');
    console.log(this.type);
    this.getWorkout();
  }
}
