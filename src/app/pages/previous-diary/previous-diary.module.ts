import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PreviousDiaryPage } from './previous-diary.page';

const routes: Routes = [
  {
    path: '',
    component: PreviousDiaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PreviousDiaryPage]
})
export class PreviousDiaryPageModule {}
