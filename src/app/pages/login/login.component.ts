import { Component } from '@angular/core';
import { AuthenticationRequest } from '../../services/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];

  register() {

    }
    
    login() {

    }

}
