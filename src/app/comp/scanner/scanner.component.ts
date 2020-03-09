import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(
    private http: HttpClient,
    private barcodeScanner: BarcodeScanner
  ) {
    this.options = {
      prompt: 'Scan the Barcode. ',
      orientation: 'portrait',
      showTorchButton: true,
    };
  }

  ngOnInit() {}

  RetreiveInfo(barcode): Observable<BarcodeInterface> {
    return this.http
      .get<BarcodeInterface>(
        `https://world.openfoodfacts.org/api/v3/product/` + barcode
      )
      .pipe(
        map(res => {
          return res as BarcodeInterface;
        })
      );
  }

  async getInfo(bar) {
    this.barcode = await this.RetreiveInfo(bar).toPromise();
    console.log(this.barcode);
  }

  ScanBarcode() {
    this.barcodeScanner
      .scan(this.options)
      .then(barcodeData => {
        console.table(barcodeData);
        this.RetreiveInfo(barcodeData.text).subscribe(
          (res: BarcodeInterface) => {
            return res;
          }
        );
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
}
