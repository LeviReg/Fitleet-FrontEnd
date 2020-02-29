import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from '../pages/workout-tracker/WorkOutInterface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkoutServiceService {
  //Url For Api call.
  private _privateURL = 'https://wger.de/api/v2/exercise/search/?term=';
  private _privateWorkouts = 'localhost:5000/api/workouts';

  //gets search results back as searchresult objects
  getArms(): Observable<SearchResult> {
    //console.log(bookName);
    return this._http
      .get<SearchResult>(this._privateURL + 'biceps')
      .pipe(tap(data => console.log('All: ' + JSON.stringify(data))));
  }
  getLegs(): Observable<SearchResult> {
    //console.log(bookName);
    return this._http
      .get<SearchResult>(this._privateURL + 'squat')
      .pipe(tap(data => console.log('All: ' + JSON.stringify(data))));
  }
  getShoulder(): Observable<SearchResult> {
    //console.log(bookName);
    return this._http
      .get<SearchResult>(this._privateURL + 'shoulder')
      .pipe(tap(data => console.log('All: ' + JSON.stringify(data))));
  }

  getWorkouts() {}

  constructor(private _http: HttpClient) {}
}
