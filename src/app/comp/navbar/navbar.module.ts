import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component'
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module'

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        RouterModule,
        MaterialModule
    ],
    declarations: [NavbarComponent],
    exports: [NavbarComponent]
})

export class NavbarComponentModule{}