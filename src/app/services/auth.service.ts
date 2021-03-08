import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'https://accounts.spotify.com/authorize';
  clientId: string = environment.auth0.clientId;
  codeChallenge: string = '';

  login() {
    return this.http.get(
      `${this.apiUrl}?response_type=code&client_id=${this.clientId}&redirect_uri=http%3A%2F%2Flocalhost&scope=user-follow-modify&state=e21392da45dbf4&code_challenge=${this.codeChallenge}&code_challenge_method=S256`
    );
  }
}
