import { Component, OnInit } from '@angular/core';
import { WorkoutServiceService } from 'src/app/services/workout-service.service';
import { SearchResult, Data } from './WorkOutInterface';

@Component({
  selector: 'app-workout-tracker',
  templateUrl: './workout-tracker.page.html',
  styleUrls: ['./workout-tracker.page.scss']
})
export class WorkoutTrackerPage implements OnInit {
  SearchTerm: string;
  //Clear: string;
  Search: any;

  getSearchInfo(): boolean {
    this.Search = [];
    this._service
      .getSearchResult(this.SearchTerm)
      .subscribe(data => (this.Search = data['suggestions']));
    return false;
  }

  constructor(private _service: WorkoutServiceService) {}

  ngOnInit() {}
}
