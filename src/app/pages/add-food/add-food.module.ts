import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponentModule } from 'src/app/comp/navbar/navbar.module';
import { SharedModule } from '../../comp/shared.module';
import { IonicModule } from '@ionic/angular';
import { AddFoodPage } from './add-food.page';

const routes: Routes = [
  {
    path: '',
    component: AddFoodPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponentModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AddFoodPage],
})
export class AddFoodPageModule {}
