import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IUser } from '..//../interfaces/IUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  newcredentialsForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.newcredentialsForm = this.formBuilder.group({
      username: [''],
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  register() {
    const newUser: IUser = {
      email: this.newcredentialsForm.get('email').value,
      username: this.newcredentialsForm.get('username').value,
      firstName: this.newcredentialsForm.get('firstName').value,
      lastName: this.newcredentialsForm.get('lastName').value,
      password: this.newcredentialsForm.get('password').value
    };
    //logged for testing the data being transfered
    //console.table(newUser);
    this.authService.register(newUser).subscribe(res => {
      //console.log(res);
      this.router.navigateByUrl('/login');
      //this.authService.login(newUser).subscribe();
    });
    // .register(this.newcredentialsForm.value)
    // .subscribe(res => {
    //   // Call Login to automatically login the new user
    //   this.authService.login(this.newcredentialsForm.value).subscribe();
    // });
  }
}
