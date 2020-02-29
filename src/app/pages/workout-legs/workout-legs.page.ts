import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WorkoutServiceService } from 'src/app/services/workout-service.service';
import { IExercise } from 'src/app/interfaces/IExercise';
import { WorkoutService } from 'src/app/services/workouts.service';

@Component({
  selector: 'app-workout-legs',
  templateUrl: './workout-legs.page.html',
  styleUrls: ['./workout-legs.page.scss']
})
export class WorkoutLegsPage implements OnInit {
  constructor(
    private _service: WorkoutServiceService,
    private _dataStorage: WorkoutService
  ) {}

  getExercise(exercise: IExercise) {
    this._dataStorage.addExercise(exercise);
    console.log(exercise);
  }

  Search: any;
  getSearchInfo(): boolean {
    this.Search = [];
    this._service
      .getLegs()
      .subscribe(data => (this.Search = data['suggestions']));
    console.log(this.Search);
    //   return false;

    return false;
  }

  ngOnInit() {
    this.getSearchInfo();
  }
}
