import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-diary',
  templateUrl: './food-diary.page.html',
  styleUrls: ['./food-diary.page.scss'],
})
export class FoodDiaryPage implements OnInit {


  subtitle: string = "Eggs";

  calorieGoal: number = 3000;
  caloriesConsumed: number = 1000;

  caloriesLeft: number = this.calorieGoal - this.caloriesConsumed;

  examples = ['Aidan', 'Conor', 'Mark']



  constructor() { }

  ngOnInit() {
  }

}
