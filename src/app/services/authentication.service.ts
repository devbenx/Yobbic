import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
      providedIn: 'root'
})
export class AuthenticationService {

      authState = new BehaviorSubject(false);

      constructor(
            private router: Router,
            private platform: Platform,
            public toastController: ToastController
      ) {
            this.platform.ready().then(() => {
                  // this.ifLoggedIn(); //to pass login page
            });
      }

      // ifLoggedIn() {
      //       this.authState.next(true);
      // }


      login(username, password) {

            if (username === password && username === "asdf") {
                  this.router.navigate(['menu']);
                  this.authState.next(true);
            } else {
                  console.log("sorry");
            }

      }

      logout() {
            this.router.navigate(['login']);
            this.authState.next(false);
      }

      isAuthenticated() {
            return this.authState.value;
      }

}
