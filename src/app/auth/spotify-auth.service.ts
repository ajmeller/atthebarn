import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyAuth {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'https://accounts.spotify.com/authorize';
  tokenUrl: string = 'https://accounts.spotify.com/api/token';

  clientId: string = environment.auth0.clientId;
  codeChallenge: string = '';
  clientSecret: string = '';

  getToken(): Observable<any> {
    return this.http.post(
      this.tokenUrl,
      { grant_type: 'client_credentials' },
      {
        headers: {
          Authorization:
            'Basic' + btoa(this.clientId + ':' + this.clientSecret),
        },
      }
    );
  }

  userAuth() {
    return this.http.get(
      `${this.apiUrl}?response_type=code&client_id=${this.clientId}&redirect_uri=http%3A%2F%2Flocalhost&scope=user-follow-modify&state=e21392da45dbf4&code_challenge=${this.codeChallenge}&code_challenge_method=S256`
    );
  }
}
