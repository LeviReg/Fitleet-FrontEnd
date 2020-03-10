import { Component, Input } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../app/comp/navbar/navbar.component';
import { Environment } from '@ionic-native/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  @Input() headerTitle: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  Logout() {
    this.authService.logout();
  }

  CloseMenu() {
    this.menu.close();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      Environment.setEnv({
        // api key for server
        API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyBpfdLQn2EEVNl8UgmZItNDxBBOqMGj8B0',

        // api key for local development
        API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyBpfdLQn2EEVNl8UgmZItNDxBBOqMGj8B0',
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.authenticationState.subscribe(state => {
        if (state) {
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['login']);
        }
      });
    });
  }
}
