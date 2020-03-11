import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ScannerComponent } from './scanner.component';

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule, RouterModule],
  declarations: [ScannerComponent],
  exports: [ScannerComponent],
})
export class ScannerComponentModule {}
