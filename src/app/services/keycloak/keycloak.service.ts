import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private _keycloak: Keycloak | undefined;
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

  constructor() { }

 async init() {
  console.log('Authenticate the user ...');
  const authenticated: boolean = await this.Keycloak?.init({
    onLoad: 'login-required'
  });

  if(authenticated) {
    
  }

  }

}
