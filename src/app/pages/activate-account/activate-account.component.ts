import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/services';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {

  message: String = '';
  isOkay: boolean = true;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  redirectToLogin() {
    this.router.navigate(['login']);

  }

  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }
  confirmAccount(token: string) {
    this.authService.confirm({
      token
    }).subscribe({
      next: () => {
        this.message = "Your account has been successfully activated.";
        this.submitted = true;
        this.isOkay = true;
      },

      error: () => {
        this.message = "Your token has been expired or invalid token.";
        this.submitted = true;
        this.isOkay = false;
      }
    });

  }


}
