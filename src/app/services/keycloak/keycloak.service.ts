import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { UserProfile } from './user-profile';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private _keycloak: Keycloak | undefined;
  private _profile: UserProfile | undefined;
  get Keycloak() {
    if (!this._keycloak) {
      this._keycloak = new Keycloak({
        url: 'http://localhost:9090',
        realm: 'Renee-smith-book-network',
        clientId: 'RSBN'
      });
    }
    return this._keycloak
  }

  get profile(): UserProfile | undefined {
    return this._profile;
  }

  constructor() { }

  async init() {
    console.log('Authenticate the user ...');
    const authenticated: boolean = await this.Keycloak?.init({
      onLoad: 'login-required'
    });

    if (authenticated) {
      this._profile = (await this.Keycloak?.loadUserProfile()) as UserProfile;
      this._profile.token = this.Keycloak?.token;

    }

  }

  login() {
    return this.Keycloak?.login();
  }
  logout() {
    return this.Keycloak?.logout({redirectUri: 'http://localhost:4200'});

  }

}
