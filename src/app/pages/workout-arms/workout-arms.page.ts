import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WorkoutServiceService } from 'src/app/services/workout-service.service';

import { IExercise } from 'src/app/interfaces/IExercise';
import { WorkoutService } from 'src/app/services/workouts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workout-arms',
  templateUrl: './workout-arms.page.html',
  styleUrls: ['./workout-arms.page.scss'],
})
export class WorkoutArmsPage implements OnInit {
  constructor(
    private _service: WorkoutServiceService,
    private _dataStorage: WorkoutService,
    private active: ActivatedRoute
  ) {}
  type: string;
  workout: IExercise;
  Search: any[] = [];

  ngOnInit(): void {}

  getExercise(exercise: IExercise) {
    this._dataStorage.addExercise(exercise);
  }

  getInfo() {
    this.Search = [];
    this._service
      .fetchData(this.type)
      .subscribe(data => this.Search.push(...data['suggestions']));

    if (this.type == 'biceps') {
      this._service
        .fetchData('triceps')
        .subscribe(data => this.Search.push(...data['suggestions']));
    }
  }

  ionViewDidEnter() {
    this.type = this.active.snapshot.paramMap.get('type');
    this.getInfo();
  }
}
