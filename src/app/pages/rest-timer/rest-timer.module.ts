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
    component: RestTimerPage
  }
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
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      /* Original colors 
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596', */
      //[outerStrokeGradientStopColor]="'#000005a'"
      // [backgroundStroke]="'#000005a'"
      //   [outerStrokeGradient]="true"
      //[outerStrokeGradient]="true"
      // outerStrokeColor: '#005a00',
      // innerStrokeColor: '#005a00',
      //animationDuration: 300,
      animation: false,
      responsive: true,
      renderOnClick: false
    })
  ],

  declarations: [RestTimerPage]
})
export class RestTimerPageModule {}
