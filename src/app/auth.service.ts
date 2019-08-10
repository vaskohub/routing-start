import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static readonly ANONYMOUS = 'anonymous';

  loggedIn = false;
  username = AuthService.ANONYMOUS;

  isAuthenticated(): Promise<boolean> {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => resolve(this.loggedIn),
          10
        );
      }
    );
  }

  login() {
    this.loggedIn = true;
    this.username = 'User';
  }

  logout() {
    this.loggedIn = false;
    this.username = AuthService.ANONYMOUS;
  }
}
