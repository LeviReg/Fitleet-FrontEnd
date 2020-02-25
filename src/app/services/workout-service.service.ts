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
  private _shouldersURL =
    'https://wger.de/api/v2/exercise/search/?term=shoulder';
  private _armsURL = 'https://wger.de/api/v2/exercise/search/?term=biceps';
  private _legsURL = 'https://wger.de/api/v2/exercise/search/?term=squat';

  //gets search results back as searchresult objects
  getArms(): Observable<SearchResult> {
    //console.log(bookName);
    return this._http
      .get<SearchResult>(this._armsURL)
      .pipe(tap(data => console.log('All: ' + JSON.stringify(data))));
  }

  getLegs(): Observable<SearchResult> {
    //console.log(bookName);
    return this._http
      .get<SearchResult>(this._legsURL)
      .pipe(tap(data => console.log('All: ' + JSON.stringify(data))));
  }

  getShoulder(): Observable<SearchResult> {
    //console.log(bookName);
    return this._http
      .get<SearchResult>(this._shouldersURL)
      .pipe(tap(data => console.log('All: ' + JSON.stringify(data))));
  }

  constructor(private _http: HttpClient) {}
}
