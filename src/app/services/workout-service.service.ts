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
  private _siteURL = 'https://wger.de/api/v2/exercise/search/?term=';

  //gets search results back as searchresult objects
  getSearchResult(ExerciseName: string): Observable<SearchResult> {
    //console.log(bookName);
    return this._http
      .get<SearchResult>(this._siteURL + ExerciseName)
      .pipe(tap(data => console.log('All: ' + JSON.stringify(data))));
  }

  constructor(private _http: HttpClient) {}
}
