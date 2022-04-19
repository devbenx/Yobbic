import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { LoginPage } from './pages/login/login.page';
import { AuthenticationService } from './services/authentication.service';

@Component({
      selector: 'app-root',
      templateUrl: 'app.component.html',
      styleUrls: ['app.component.scss'],
})
export class AppComponent {

      rootPage: any = LoginPage;
      menuSections = [];

      constructor(
            private router: Router,
            private platform: Platform,
            private splashScreen: SplashScreen,
            private statusBar: StatusBar,
            private authenticationService: AuthenticationService
      ) {
            this.initializeApp();
      }
      initializeApp() {
            this.platform.ready().then(() => {
                  this.statusBar.styleDefault();
                  this.splashScreen.hide();


                  this.authenticationService.authState.subscribe(state => {
                        if (state) {
                              this.router.navigate(['menu/master-list']);
                              // console.log('logged in')
                        } else {
                              this.router.navigate(['login']);
                        }
                  });

            });
      }


}
