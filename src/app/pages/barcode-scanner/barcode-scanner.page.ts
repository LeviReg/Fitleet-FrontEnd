import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BarcodeInterface } from './BarcodeInterface';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.page.html',
  styleUrls: ['./barcode-scanner.page.scss'],
})
export class BarcodeScannerPage implements OnInit {

  barcode : string;
  constructor(private http: HttpClient) { 

  }

  ngOnInit() {
  }

  RetreiveInfo(barcode) {
    return this.http.get<BarcodeInterface[]>(`https://world.openfoodfacts.org/api/v3/product/`+barcode+'.json')
  }

}
