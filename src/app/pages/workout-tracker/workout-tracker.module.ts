import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkoutTrackerPage } from './workout-tracker.page';
import { NavbarComponentModule } from 'src/app/comp/navbar/navbar.module';

const routes: Routes = [
  {
    path: '',
    component: WorkoutTrackerPage
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
  declarations: [WorkoutTrackerPage]
})
export class WorkoutTrackerPageModule {}
