import { Component, OnInit } from '@angular/core';
import { WorkoutServiceService } from 'src/app/services/workout-service.service';

@Component({
  selector: 'app-workout-legs',
  templateUrl: './workout-legs.page.html',
  styleUrls: ['./workout-legs.page.scss']
})
export class WorkoutLegsPage implements OnInit {
  constructor(private _service: WorkoutServiceService) {}
  Search: any;

  getSearchInfo(): boolean {
    this.Search = [];
    this._service
      .getLegs()
      .subscribe(data => (this.Search = data['suggestions']));
    console.log(this.Search);
    //   return false;

    return false;
  }

  ngOnInit() {
    this.getSearchInfo();
  }
}
