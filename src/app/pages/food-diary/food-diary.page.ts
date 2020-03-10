import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { scan } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { IFoodDiaries } from 'src/app/interfaces/IFoodDiaries';

@Component({
  selector: 'app-food-diary',
  templateUrl: './food-diary.page.html',
  styleUrls: ['./food-diary.page.scss'],
})
export class FoodDiaryPage {
  foodDiaries: IFoodDiaries[];

  constructor(
    public navCtrl: NavController,
    public barcodeScanner: BarcodeScanner,
    private authService: AuthService,
    public loadingCtrl: LoadingController
  ) {}

  async ionViewDidEnter() {
    await this.presentLoadingCustom().then(res => {
      this.getFoodDiaries();
    });
  }

  getFoodDiaries() {
    this.authService.GetFoodDiaries().subscribe(data => {
      this.foodDiaries = data;
    });
  }

  async presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: null,
      showBackdrop: true,
      cssClass: 'text-center',
      message: `  
      <ion-text class-"ion-text-center">Loading ... </ion-text>
      </br>
      <ion-item lines="none">
        <img src="../../assets/loader.gif">
        </ion-item>`,
      duration: 3000,
    });
    return (await loading).present();
  }

  async createDiary() {
    await this.authService.CreateDiary().subscribe(res => {
      console.log(res);
    });
    console.log('Create Diary Called');

    await this.getFoodDiaries();
  }
}
