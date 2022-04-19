import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MasterListPage } from '../master-list/master-list.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  loginUser(username, password) {
    this.authService.login(username, password);
  }

}
