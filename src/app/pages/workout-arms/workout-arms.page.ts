import { Component, OnInit } from '@angular/core';
import { WorkoutServiceService } from 'src/app/services/workout-service.service';

@Component({
  selector: 'app-workout-arms',
  templateUrl: './workout-arms.page.html',
  styleUrls: ['./workout-arms.page.scss']
})
export class WorkoutArmsPage implements OnInit {
  constructor(private _service: WorkoutServiceService) {}
  Search: any;

  getSearchInfo(): boolean {
    this.Search = [];
    this._service
      .getArms()
      .subscribe(data => (this.Search = data['suggestions']));
    console.log(this.Search);
    //   return false;

    return false;
  }

  ngOnInit() {
    this.getSearchInfo();
  }
}
