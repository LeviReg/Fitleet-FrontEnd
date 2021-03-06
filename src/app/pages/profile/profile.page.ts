import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/interfaces/IUser';
import { Quote } from './quoteInterface';
import { IProfile, IPedometer } from 'src/app/interfaces/IProfile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  chart: any; // Calorie Data
  doughnut: any; // Food Data
  authUser: IUser;

  pedometer: IProfile;
  steps: IPedometer[];
  result: any;

  constructor(private _service: AuthService) {}
  //needs renaming

  GetQuote() {
    return this._service.quoteOfTheDay().then(data => {
      this.result = JSON.parse(data.data);
      console.log(this.result.contents.quotes[0].quote);
    });
  }

  async ionViewDidEnter() {
    this.GetQuote();

    this.authUser = await this._service.fetchSingleUser().toPromise();
    // A Chart Object has to be canvas
    this.chart = new Chart('CalorieCanvas', {
      type: 'line', //type of chart

      data: {
        labels: [
          'Monday',
          'Tuesday',
          'Wendesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ], //  how lines do u want to display

        datasets: [
          {
            label: 'Progress through week',
            data: [0, 0, 0, 100, 0, 0, 0], // data for the line chart
            backgroundColor: 'red', // the dots
            borderColor: 'black', // the line
            fill: false, // fill bascailly fills all the space underneath the line     Must be false
          },
        ],
      },
    });

    //Food chart
    this.doughnut = new Chart('doughnut', {
      type: 'doughnut',
      options: {
        responsive: true, // makes it responsive. if false cant see the doughnut
        title: {
          display: false, // makes the doughnut bigger. True makes the height smaller
        },
        legend: {
          position: 'top', // Where the legend will be on top
        },
        animation: {
          // animation not working
          animateScale: true,
          animateRotate: true,
        },
      },
      data: {
        datasets: [
          {
            data: [120, 300, 45], //data
            backgroundColor: ['green', 'red', 'blue'], // Colours
            label: 'Dataset 1',
          },
        ],
        labels: ['Protein', 'Carbohydrates', 'Fat'], // names
      },
    });
  }

  getWalk() {
    this._service.getPedometerNumber().subscribe(data => {
      this.pedometer = data;
      this.steps = data.pedometer;
      console.log(data);
      console.log(data.pedometer);
    });
  }
}
