import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { SpotifyAuth } from '../auth/spotify-auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthService, public spotifyAuth: SpotifyAuth) {}

  login(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({ returnTo: 'home' });
  }

  burnerFn(): void {
    this.spotifyAuth.getToken().subscribe((hi) => {
      console.log(hi);
    });
  }

  ngOnInit(): void {}
}
