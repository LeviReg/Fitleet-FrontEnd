import { Component, OnInit } from '@angular/core';
import { WorkoutServiceService } from 'src/app/services/workout-service.service';

@Component({
  selector: 'app-workout-shoulders',
  templateUrl: './workout-shoulders.page.html',
  styleUrls: ['./workout-shoulders.page.scss']
})
export class WorkoutShouldersPage implements OnInit {
  constructor(private _service: WorkoutServiceService) {}
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
