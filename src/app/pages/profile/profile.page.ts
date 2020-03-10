import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  chart: any; // Pedometor Data
  doughnut: any; // Food Data

  constructor() {}

  ngOnInit() {
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
          'Sunday'
        ], //  how lines do u want to display

        datasets: [
          {
            label: 'Progress through week',
            data: [0, 0, 0, 100, 0, 0, 0], // data for the line chart
            backgroundColor: 'red', // the dots
            borderColor: 'black', // the line
            fill: false // fill bascailly fills all the space underneath the line     Must be false
          }
        ]
      }
    });

    //Food chart
    this.doughnut = new Chart('doughnut', {
      type: 'doughnut',
      options: {
        responsive: true, // makes it responsive. if false cant see the doughnut
        title: {
          display: false // makes the doughnut bigger. True makes the height smaller
        },
        legend: {
          position: 'top' // Where the legend will be on top
        },
        animation: {
          // animation not working
          animateScale: true,
          animateRotate: true
        }
      },
      data: {
        datasets: [
          {
            data: [45, 10, 5, 25, 15], //data
            backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'], // Colours
            label: 'Dataset 1'
          }
        ],
        labels: ['Calories', 'Fat', 'Protein', 'Carbs', 'Macros'] // names
      }
    });
  }
}
