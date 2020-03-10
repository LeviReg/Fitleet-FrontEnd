import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import {
  BarcodeScanner,
  BarcodeScanResult,
} from '@ionic-native/barcode-scanner/ngx';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent implements OnInit {
  barcode: BarcodeInterface;
  options: any;

  constructor(private http: HTTP, private barcodeScanner: BarcodeScanner) {
    this.options = {
      prompt: 'Scan the Barcode. ',
      orientation: 'portrait',
      showTorchButton: true,
    };
  }

  storeData: any;
  @Output() sendData: EventEmitter<BarcodeInterface> = new EventEmitter();

  ngOnInit() {}

  RetreiveInfo(barcode) {
    return this.http.get(
      `https://world.openfoodfacts.org/api/v3/product/` + barcode,
      {},
      {}
    );
  }

  async ScanBarcode() {
    await this.barcodeScanner
      .scan(this.options)
      .then(async barcodeData => {
        await this.RetreiveInfo(barcodeData.text).then(res => {
          this.storeData = res.data as BarcodeInterface;
          if (this.storeData != undefined) {
            this.sendData.emit(JSON.parse(this.storeData));
          }
          return res.data;
        });
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
}
