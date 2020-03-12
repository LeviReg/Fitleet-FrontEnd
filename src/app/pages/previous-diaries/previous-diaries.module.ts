import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PreviousDiariesPage } from './previous-diaries.page';

const routes: Routes = [
  {
    path: '',
    component: PreviousDiariesPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PreviousDiariesPage],
})
export class PreviousDiariesPageModule {}
