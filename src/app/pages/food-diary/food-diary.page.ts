import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { scan } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';


import { IFoodDiaries, IFoods } from 'src/app/interfaces/IFoodDiaries';


@Component({
  selector: 'app-food-diary',
  templateUrl: './food-diary.page.html',
  styleUrls: ['./food-diary.page.scss'],
})
export class FoodDiaryPage {
  foodDiaries: IFoodDiaries[];

  buttonPressed = false;
  pulledDown = true;

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


  async getFoodDiaries() {
    return this.authService.GetFoodDiaries().subscribe(data => {
      this.foodDiaries = data;
    });
  }

  doRefresh(event) {
    this.getFoodDiaries();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
    this.pulledDown = true;
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
      duration: 500,
    });
    return (await loading).present();
  }

  logFoods(id: string) {
    console.log(id);
  }

  deleteFoods(name: string) {
    this.foodDiaries = this.foodDiaries.filter(e => e._id !== name);
    this.authService.deleteFood(name).subscribe(data => {
      console.log(data);
    });
  }

  createDiary() {
    this.authService.CreateDiary().subscribe(res => {
      console.log(res);
    });
    console.log('Create Diary Called');
    this.foodDiaries.length += 1;
    this.pulledDown = false;
  }
}
