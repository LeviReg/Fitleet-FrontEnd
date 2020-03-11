import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IFoodDiaries } from 'src/app/interfaces/IFoodDiaries';

@Component({
  selector: 'app-previous-diary',
  templateUrl: './previous-diary.page.html',
  styleUrls: ['./previous-diary.page.scss'],
})
export class PreviousDiaryPage implements OnInit {
  id: string;
  foodDiaries: IFoodDiaries[];
  constructor(
    private active: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.id = this.active.snapshot.paramMap.get('id');
    this.getSelectedDiary();
  }

  getSelectedDiary() {
    return this.authService.getFoodDiaryByID(this.id).subscribe((data: any) => {
      this.foodDiaries = data;
      console.log('The data', this.foodDiaries);
    });
  }
}
