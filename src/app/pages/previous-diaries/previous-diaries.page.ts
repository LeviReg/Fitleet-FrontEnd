import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IFoodDiaries } from 'src/app/interfaces/IFoodDiaries';

@Component({
  selector: 'app-previous-diaries',
  templateUrl: './previous-diaries.page.html',
  styleUrls: ['./previous-diaries.page.scss'],
})
export class PreviousDiariesPage {
  foodDiaries: any[];
  datedDiaries: any[];

  constructor(private authService: AuthService) {}

  ionViewWillEnter() {
    this.getFoodDiaries();
  }

  async getFoodDiaries() {
    await this.authService.GetFoodDiaries().subscribe(data => {
      this.foodDiaries = data;
    });
  }
}
