import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WorkoutServiceService } from 'src/app/services/workout-service.service';

import { IExercise } from 'src/app/interfaces/IExercise';
import { WorkoutService } from 'src/app/services/workouts.service';

@Component({
  selector: 'app-workout-arms',
  templateUrl: './workout-arms.page.html',
  styleUrls: ['./workout-arms.page.scss']
})
export class WorkoutArmsPage implements OnInit {
  constructor(
    private _service: WorkoutServiceService,
    private _dataStorage: WorkoutService
  ) {}

  workout: IExercise;
  getExercise(exercise: IExercise) {
    this._dataStorage.addExercise(exercise);
  }

  Search: any;
  getSearchInfo(): boolean {
    this.Search = [];
    this._service
      .getArms()
      .subscribe(data => (this.Search = data['suggestions']));
    //console.log(this.Search);
    return false;
  }

  ngOnInit() {
    this.getSearchInfo();
  }
}