import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { WorkoutServiceService } from 'src/app/services/workout-service.service';
//import { contents, quotes } from './quoteInterface';
import { Contents, Quote } from './quoteInterface';
import { checkAvailability } from '@ionic-native/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  chart: any; // Pedometor Data
  doughnut: any; // Food Data

  constructor(private _service: AuthService) {}

  private result: any;

  LogQuote() {
    return this._service.quoteOfTheDay().then(data => {
      this.result = JSON.parse(data.data);
      console.log(this.result.contents.quotes[0].quote);
    });
  }
  check() {
    console.log(this.result);
  }

  ngOnInit() {
    this.LogQuote();

    //PedoMetor Chart
    // A Chart Object has to be canvas
    this.chart = new Chart('pedometorCanvas', {
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
            data: [1000, 3000, 3000, 3500, 3000, 2500, 4500], // data for the line chart
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
            data: [45, 30, 25], //data
            backgroundColor: ['green', 'orange', 'red'], // Colours
            label: 'Dataset 1',
          },
        ],
        labels: ['Protein', 'Carbohydrate', 'Fat'], // names
      },
    });
  }
}
