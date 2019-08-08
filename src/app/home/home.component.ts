import {Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  onLoadServers(id: number) {
    this.router.navigate(
      ['servers', id, 'edit'],
      {
        queryParams: {allowEdit: true},
        fragment: 'loading'
      }
    );
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

  getCurrentUser(): String {
    return this.authService.username;
  }
}
