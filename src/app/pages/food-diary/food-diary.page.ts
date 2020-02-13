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
  constructor(
    public navCtrl: NavController,
    public barcodeScanner: BarcodeScanner
  ) {}

  ngOnInit() {}
}
