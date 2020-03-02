import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WorkoutServiceService } from 'src/app/services/workout-service.service';
import { SearchResult, Data } from './WorkOutInterface';

@Component({
  selector: 'app-workout-tracker',
  templateUrl: './workout-tracker.page.html',
  styleUrls: ['./workout-tracker.page.scss']
})
export class WorkoutTrackerPage implements OnInit {
  constructor(private _service: WorkoutServiceService) {}

  SearchArms: [];
  SearchLegs: [];
  SearchShoulder: [];
  getInfoLegs(): boolean {
    this.SearchLegs = [];
    this._service
      .fetchData('squats')
      .subscribe(data => (this.SearchLegs = data['suggestions']));
    //console.log(this.Search);
    return false;
  }



  getInfoShoulders(): boolean {
    this.SearchShoulder = [];
    this._service
      .fetchData('shoulders')
      .subscribe(data => (this.SearchShoulder = data['suggestions']));
    //console.log(this.Search);
    return false;
  }
  ngOnInit() {
 
  }
}
