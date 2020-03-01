import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { scan } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { IFoodDiaries } from 'src/app/interfaces/IFoodDiaries';

@Component({
  selector: 'app-food-diary',
  templateUrl: './food-diary.page.html',
  styleUrls: ['./food-diary.page.scss']
})
export class FoodDiaryPage implements OnInit {
  foodDiaries: IFoodDiaries[];
  
  constructor(
    public navCtrl: NavController,
    public barcodeScanner: BarcodeScanner,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getFoodDiaries();
  }
  
  getFoodDiaries(){
  this.authService.GetFoodDiaries().subscribe(data => {
     this.foodDiaries = data;
     console.log(this.foodDiaries);
   });
  }
}
