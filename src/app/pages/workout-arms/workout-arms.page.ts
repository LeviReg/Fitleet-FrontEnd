import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WorkoutServiceService } from 'src/app/services/workout-service.service';
import { element } from 'protractor';

@Component({
  selector: 'app-workout-arms',
  templateUrl: './workout-arms.page.html',
  styleUrls: ['./workout-arms.page.scss']
})
export class WorkoutArmsPage implements OnInit {
  constructor(private _service: WorkoutServiceService) {}

  //Need to get it to Pass to parent to display
  // exercise: any;
  // @Output() exerciseEvent = new EventEmitter<string>();

  // getExercise(name: any) {
  //   this.exerciseEvent.emit(name);
  //   // console.log(this.exerciseEvent);
  //   // console.log(name);
  // }

  Search: any;
  getSearchInfo(): boolean {
    this.Search = [];
    this._service
      .getArms()
      .subscribe(data => (this.Search = data['suggestions']));
    //console.log(this.Search);
    return false;
  }

  ngOnInit() {
    this.getSearchInfo();
  }
}
