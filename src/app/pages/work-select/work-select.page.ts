import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/services/workouts.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-select',
  templateUrl: './work-select.page.html',
  styleUrls: ['./work-select.page.scss'],
})
export class WorkSelectPage implements OnInit {
  constructor(
    private _service: WorkoutService,
    private _authService: AuthService,
    private router: Router
  ) {}

  postWorkout(WorkoutName: string) {
    console.log(this._service.getExercies());
    console.log(WorkoutName);
    this._authService
      .postWorkout(WorkoutName, this._service.getExercies())
      .subscribe(res => {
        console.log(res);
      });
  }
  ngOnInit() {}
}
