import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError, mergeMap, map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { IFoodDiaries } from '../interfaces/IFoodDiaries';
import { from } from 'rxjs';
import { WorkoutService } from './workouts.service';
import { IWorkout } from '../interfaces/IExercise';
import { HTTP } from '@ionic-native/http/ngx';
import { IUser } from '../interfaces/IUser';
import { IProfile } from '../interfaces/IProfile';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // url = environment.url;
  url = environment.url;
  user = null;
  TOKEN_KEY = 'access_token';
  private _QuoteApi = 'https://quotes.rest/';

  constructor(
    private http: HttpClient,
    private helper: JwtHelperService,
    private storage: Storage,
    private plt: Platform,
    private alertController: AlertController,
    private _exercise: WorkoutService,
    private _http: HTTP,
    private router: Router
  ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    this.storage.get(this.TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);

        if (!isExpired) {
          this.user = decoded;
        } else {
          this.storage.remove(this.TOKEN_KEY);
        }
        console.log(this.TOKEN_KEY);
      }
    });
  }

  CreateDiary() {
    return this.http
      .post<any>(`${this.url}/api/food-diary/create-diary`, {}, {})
      .pipe(
        catchError(e => {
          this.showAlert(e.error.msg);
          console.log(e);
          throw new Error(e);
        })
      );
  }

  GetFoodDiaries(): Observable<IFoodDiaries[]> {
    return this.http.get<IFoodDiaries[]>(`${this.url}/api/food-diary`);
  }

  register(user) {
    return this.http.post(`${this.url}/api/register`, user).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        console.log(e);
        throw new Error(e);
      })
    );
  }

  addFood(foodInfo) {
    return this.http
      .post<any>(`${this.url}/api/food-diary/add-food`, foodInfo)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(e => {
          this.showAlert(e.error.msg);
          console.log(e);
          throw new Error(e);
        })
      );
  }

  login(credentials) {
    console.log(credentials);
    return this.http.post(`${this.url}/api/login`, credentials).pipe(
      tap(res => {
        this.storage.set(this.TOKEN_KEY, res['token']);
        localStorage.setItem('access_token', res['token']);
        this.user = this.helper.decodeToken(res['token']);
        this.router.navigate(['/home']);
      }),
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }
  getSpecialData() {
    return this.http.get(`${this.url}/api/home`).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('You are not authorized for this!');
          this.logout();
        }
        throw new Error(e);
      })
    );
  }

  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK'],
    });
    alert.then(alert => alert.present());
  }

  //Calls quote to get the quote of the day.
  quoteOfTheDay() {
    return this._http.get(this._QuoteApi + 'qod', {}, {});
  }
  //gets username for profile page
  ReturnUsername(id: string) {
    return this._http.get(`${this.url}/api/getUser/`, {}, {});
  }

  fetchSingleUser = (): Observable<IUser> =>
    this.http.get<IUser>(`${this.url}/api/getUser`);

  getWorkouts() {
    return this.http.get<IWorkout[]>(`${this.url}/api/workouts/`);
  }

  getWorkoutID(id: string) {
    return this.http.get<IWorkout>(`${this.url}/api/workoutID/${id}`);
  }

  getFoodDiaryByID(id: string): Observable<IFoodDiaries[]> {
    return this.http.get<IFoodDiaries[]>(`${this.url}/api/foodDiaryByID/${id}`);
  }

  postWorkout(workout, WorkoutName) {
    return this.http
      .post<any>(`${this.url}/api/workouts/create`, {
        name: workout,
        exercises: WorkoutName.map(el => {
          return {
            name: el,
          };
        }),
      })
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  deleteWorkouts(id: string) {
    return this.http.delete(`${this.url}/api/deleteExercise/${id}`);
  }

  getPedometerNumber(): Observable<IProfile> {
    return this.http.get<IProfile>(`${this.url}/api/pedometer`);
  }

  deleteFood(id: string) {
    return this.http.delete(`${this.url}/api/deleteFood/${id}`);
  }
}
