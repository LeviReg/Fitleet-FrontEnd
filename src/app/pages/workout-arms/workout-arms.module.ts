import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkoutArmsPage } from './workout-arms.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutArmsPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [WorkoutArmsPage],
})
export class WorkoutArmsPageModule {}
