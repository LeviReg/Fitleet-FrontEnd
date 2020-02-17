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
      `https://world.openfoodfacts.org/api/v3/product/` + barcode + '.json'
    );
  }

  ScanBarcode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        console.log('Barcode data', barcodeData);
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
}
