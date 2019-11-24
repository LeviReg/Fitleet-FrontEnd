import { Component, OnInit } from '@angular/core';
//import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

@Component({
  selector: 'app-rest-timer',
  templateUrl: './rest-timer.page.html',
  styleUrls: ['./rest-timer.page.scss'],
})
export class RestTimerPage implements OnInit {


  percent: number = 0;
  radius: number = 100;

  fullTime: any = '00:01:30';

  timer: any = false;
  progress: any = 0;
  minutes: number = 1;
  seconds: any = 30;

  //variables for overall time inside interpolation


  startTimer() {

    //clears(stops it) the old timer every time the counter is clicked.
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.timer = false;
    this.percent = 0;
    this.progress = 0;

    let timeSplit = this.fullTime.split(':');
    this.minutes = timeSplit[1];
    this.seconds = timeSplit[2];

    let totalSeconds = Math.floor(this.minutes * 60) + parseInt(this.seconds);

    this.timer = setInterval(() => {
      //if percent is equal to radius 100% then you stop the timer
      if (this.percent == this.radius) {
        clearInterval(this.timer);
      }

      //divide progress by total amount of seconds and * 100 to get the percentage
      this.percent = Math.floor((this.progress / totalSeconds) * 100);
      this.progress++;
    }, 1000)
  }


  constructor() { }

  ngOnInit() {
  }

}
