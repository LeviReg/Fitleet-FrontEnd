import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: null,
      showBackdrop: true,
      cssClass: 'text-center',
      message: `  
      <ion-text class-"ion-text-center">Logging in ... </ion-text>
      </br>
      <ion-item lines="none">
        <img src="../../assets/loader.gif">
        </ion-item>`,
      duration: 3000,
    });
    return (await loading).present();
  }

  onSubmit() {
    this.authService.login(this.credentialsForm.value).subscribe();
    this.presentLoadingCustom();
  }
}
