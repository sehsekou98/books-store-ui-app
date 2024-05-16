import {Component, OnInit} from '@angular/core';
import { KeycloakService } from '../../services/keycloak/keycloak.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

 // authRequest: AuthenticationRequest = {email: '', password: ''};
 // errorMsg: Array<string> = [];

  constructor(
    private KeycloakService: KeycloakService
  ) {
  }
  async ngOnInit() {
  await this.KeycloakService.init();
  await this.KeycloakService.login();
  }

 /* login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res) => {
        this.tokenService.token = res.token as string;
        this.router.navigate(['books']);
      },
      error: (err) => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error.errorMsg);
        }
      }
    });
  }

  register() {
    this.router.navigate(['register']);
  } */
}
