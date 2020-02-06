import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkoutShouldersPage } from './workout-shoulders.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutShouldersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkoutShouldersPage]
})
export class WorkoutShouldersPageModule {}
