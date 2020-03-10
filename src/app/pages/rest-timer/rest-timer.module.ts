import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponentModule } from 'src/app/comp/navbar/navbar.module';
import { IonicModule } from '@ionic/angular';

import { RestTimerPage } from './rest-timer.page';

//Import Circle Progress library.
import { NgCircleProgressModule } from 'ng-circle-progress';

const routes: Routes = [
  {
    path: '',
    component: RestTimerPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavbarComponentModule,
    RouterModule.forChild(routes),

    NgCircleProgressModule.forRoot({
      // set defaults here
      titleFontSize: '25',
      radius: 160,
      outerStrokeWidth: 16,
      innerStrokeWidth: 1,
      backgroundGradientStopColor: 'white',
      innerStrokeColor: '#ffffff',
      outerStrokeColor: '#ffffff',
      animation: false,
      responsive: true,
      renderOnClick: false,
      titleColor: '#ffffff',
      subtitleColor: '#ffffff',
    }),
  ],

  declarations: [RestTimerPage],
})
export class RestTimerPageModule {}
