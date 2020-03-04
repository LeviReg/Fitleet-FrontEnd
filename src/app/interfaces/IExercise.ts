export interface IExercise {
  name: string;
}

export interface IWorkout {
  exercises: IExercise[];
  name: string;
}
