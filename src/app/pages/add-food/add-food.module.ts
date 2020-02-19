import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponentModule } from 'src/app/comp/navbar/navbar.module';
import { ScannerComponent } from '../../comp/scanner/scanner.component';
import { IonicModule } from '@ionic/angular';
import { AddFoodPage } from './add-food.page';

const routes: Routes = [
  {
    path: '',
    component: AddFoodPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponentModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddFoodPage, ScannerComponent]
})
export class AddFoodPageModule {}
