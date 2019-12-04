import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-food-diary',
  templateUrl: './food-diary.page.html',
  styleUrls: ['./food-diary.page.scss']
})
export class FoodDiaryPage implements OnInit {
  num: string;
  subtitle: string = 'Eggs';

  calorieGoal: number = 3000;
  caloriesConsumed: number = 1000;

  caloriesLeft: number = this.calorieGoal - this.caloriesConsumed;

  examples = ['Aidan', 'Conor', 'Mark'];

  constructor(
    public navCtrl: NavController,
    public barcodeScanner: BarcodeScanner
  ) {}

  ngOnInit() {}

  scan() {
    this.barcodeScanner.scan().then(data => {
      this.num = data.text;
    });
  }
}
