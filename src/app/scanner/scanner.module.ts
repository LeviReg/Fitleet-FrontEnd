import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ScannerComponent } from './scanner.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [ScannerComponent],
  exports: [ScannerComponent]
})
export class TestComponentModule {}
