import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WorkoutServiceService } from 'src/app/services/workout-service.service';

@Component({
  selector: 'app-workout-shoulders',
  templateUrl: './workout-shoulders.page.html',
  styleUrls: ['./workout-shoulders.page.scss']
})
export class WorkoutShouldersPage implements OnInit {
  constructor(private _service: WorkoutServiceService) {}

  exercise: any;
  @Output() exerciseEvent = new EventEmitter<any[]>();

  getExercise(name: any) {
    this.exerciseEvent.emit(name);
    console.log(this.exerciseEvent);
    console.log(name);
  }

  Search: any;

  getSearchInfo(): boolean {
    this.Search = [];
    this._service
      .getShoulder()
      .subscribe(data => (this.Search = data['suggestions']));
    console.log(this.Search);
    //   return false;

    return false;
  }

  ngOnInit() {
    this.getSearchInfo();
  }
}
