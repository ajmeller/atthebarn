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

  spotifyAuth() {
    return this.http.post(
      'https://accounts.spotify.com/api/token',
      { grant_type: 'client_credentials' },
      {
        headers: {
          Authorization: 'Basic <base64 encoded client_id:client_secret>',
        },
      }
    );
  }
  //TODO: configure auth token

  userAuth() {
    return this.http.get(
      `${this.apiUrl}?response_type=code&client_id=${this.clientId}&redirect_uri=http%3A%2F%2Flocalhost&scope=user-follow-modify&state=e21392da45dbf4&code_challenge=${this.codeChallenge}&code_challenge_method=S256`
    );
  }
}
