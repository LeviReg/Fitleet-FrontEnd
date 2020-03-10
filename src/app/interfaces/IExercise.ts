export interface IExercise {
  name: string;
  _id: string;
}

export interface IWorkout {
  exercises: IExercise[];
  name: string;
}
