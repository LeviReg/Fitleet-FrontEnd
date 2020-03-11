export interface IPedometer {
  _id: string;
  Distance: string;
  Day: Date;
}

export interface IProfile {
  pedometer: IPedometer[];
  _id: string;
  userID: string;
}