import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PedometerPage } from './pedometer.page';
import { NavbarComponentModule } from 'src/app/comp/navbar/navbar.module';

const routes: Routes = [
  {
    path: '',
    component: PedometerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavbarComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PedometerPage]
})
export class PedometerPageModule {}
