import { Component } from '@angular/core';
import { RegistrationRequest } from '../../services/models';
import { AuthenticationService } from '../../services/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(
    private router: Router,
    private authService: AuthenticationService,

  ) {

  }

  registerRequest: RegistrationRequest = {email: '', firstname: '', lastname: '', password: ''};
  errorMsg: Array<string> = [];


  login() {
    this.router.navigate(['login'])

  }
  register() {

  }
}
