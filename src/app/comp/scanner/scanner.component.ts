import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BarcodeScanner,
  BarcodeScanResult
} from '@ionic-native/barcode-scanner/ngx';
import { BarcodeInterface } from './BarcodeInterface';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {
  barcode: string;
  constructor(
    private http: HttpClient,
    private barcodeScanner: BarcodeScanner
  ) {}

  ngOnInit() {}

  RetreiveInfo(barcode) {
    return this.http.get<BarcodeInterface[]>(
      `https://api.edamam.com/api/food-database/parser?upc=` +
        barcode`&app_id=1b1c4a23&app_key=b9c11d00957f6453a66c8f6f6f276364` +
        '.json'
    );
    console.log(this.barcode);
  }

  ScanBarcode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        console.log('Barcode data', barcodeData);
        this.RetreiveInfo(barcodeData);
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
}
