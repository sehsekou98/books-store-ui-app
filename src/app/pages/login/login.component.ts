import { Component } from '@angular/core';
import { AuthenticationRequest } from '../../services/models';
import {  Router } from '@angular/router';
import { AuthenticationService } from '../../services/services';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
  ) {}

  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];

  register() {
    this.router.navigate(['register']);

    }

    login() {
      this.errorMsg = [];
      this.authService.authenticate({
        body: this.authRequest
      }).subscribe({
        next: (res) => {
          this.tokenService.token = res.token as string;
          this.router.navigate(['book']);
        },
        error: (err) => {
          console.log(err);
          if(err.error.validationErrors) {
            this.errorMsg = err.error.validationErrors;
          }else {
            this.errorMsg.push(err.console.error.error);

          }
        }
      });

    }

}
