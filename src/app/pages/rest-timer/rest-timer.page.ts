import { Component, OnInit } from '@angular/core';
import { Insomnia } from '@ionic-native/insomnia/ngx';

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
  elapsed: any = {
    h: '00',
    m: '00',
    s: '00',
  };

  //overalltimer
  countDownTimer: any = false;

  startTimer() {
    //clears(stops it) the old timer every time the counter is clicked.
    if (this.timer) {
      clearInterval(this.timer);
    }
    //if totalTimer is false then run progresTimer() as to not reset totalTimer
    if (!this.countDownTimer) {
      this.progressTimer();
    }

    this.timer = false;
    this.percent = 0;
    this.progress = 0;

    //Splits up full time into an array so 1 is in [1] and 30 is in [2]
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
    }, 1000);
  }

  progressTimer() {
    let countDownDate = new Date();

    this.countDownTimer = setInterval(() => {
      let now = new Date().getTime();

      let distance = now - countDownDate.getTime();

      // Time calculations for hours, minutes and seconds

      this.elapsed.h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.elapsed.m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.elapsed.s = Math.floor((distance % (1000 * 60)) / 1000);

      this.elapsed.h = this.pad(this.elapsed.h, 2);
      this.elapsed.m = this.pad(this.elapsed.m, 2);
      this.elapsed.s = this.pad(this.elapsed.s, 2);
    }, 1000);
  }

  pad(num, size) {
    let s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
  }

  stopTimer() {
    clearInterval(this.countDownTimer);
    clearInterval(this.timer);
    clearInterval(this.countDownTimer);
    this.countDownTimer = false;
    this.countDownTimer = false;
    this.timer = false;
    this.percent = 0;
    this.progress = 0;
    this.elapsed = {
      h: '00',
      m: '00',
      s: '00',
    };
  }

  constructor() {}

  ngOnInit() {}
}
