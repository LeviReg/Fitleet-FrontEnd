import { Component, OnInit, Output, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() headerTitle: string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  Logout() {
    this.authService.logout();
  }
}
