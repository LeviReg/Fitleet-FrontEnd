import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { WorkoutService } from './workouts.service';
import { AuthService } from './auth.service';
import { IExercise } from '../interfaces/IExercise';

@Injectable({
  providedIn: 'root'
})
export class WorkoutStorageService {
  constructor(
    private _http: HttpClient,
    private _exercise: WorkoutService,
    private _authService: AuthService
  ) {}

  storeRecipes() {
    // const ecercise = this._exercise.getExercies();
    // this._http.put(
    //   // URL
    //   )
  }

  fetchRecipes() {
    // return this._http  //switchs to a httpObserbiable
    // .get<IExercise[]>(
    //   // URL
    // ).pipe(exercises =>{
    //   return exercises.map(exercise =>{
    //     return{
    //       ...exercise
    //     };
    //   });
    // }),
    // tap(exerciset =>{
    //   this._exercise.setExercises(exerciset);
    // });
  }
}
