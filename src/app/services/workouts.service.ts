import { Injectable } from '@angular/core';

import { IExercise } from '../interfaces/IExercise';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private ExercisesChanged = new Subject<IExercise[]>();
  private exercises: IExercise[] = [];

  constructor() {}

  //get all Exercises
  getExercies() {
    return this.exercises.slice();
  }

  setExercises(recipes: IExercise[]) {
    this.exercises = recipes;
    this.ExercisesChanged.next(this.exercises.slice());
  }
  //get a single Exercise
  getExercise(index: number) {
    return this.exercises[index];
  }

  //add an Exercise
  addExercise(exercise: IExercise) {
    this.exercises.push(exercise);
    this.ExercisesChanged.next(this.exercises.slice());
  }
  //Update an Exercise
  updateExercise(index: number, newRecipe: IExercise) {
    this.exercises[index] = newRecipe;
    this.ExercisesChanged.next(this.exercises.slice());
  }
  //delete an Exercise
  deleteExercise(index: number) {
    this.exercises.splice(index, 1);
    this.ExercisesChanged.next(this.exercises.slice());
  }
}