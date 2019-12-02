import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodDiaryPage } from './food-diary.page';
import { NavbarComponentModule } from 'src/app/comp/navbar/navbar.module';

const routes: Routes = [
  {
    path: '',
    component: FoodDiaryPage
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
  declarations: [FoodDiaryPage]
})
export class FoodDiaryPageModule {}
