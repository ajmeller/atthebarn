import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpotifyAuth } from '../auth/spotify-auth.service';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  apiUrl: string = 'https://api.spotify.com';
  spotifyToken: any;

  constructor(private http: HttpClient, private spotifyAuth: SpotifyAuth) {
    this.spotifyAuth.getToken().subscribe((x) => {
      this.spotifyToken = x.access_token;
    });
  }

  getUserAlbums(): Observable<any> {
    return this.http.get(`${this.apiUrl}/v1/me/albums?limit=50`, {
      headers: {
        Authorization: `Bearer ${this.spotifyToken}`,
      },
    });
  }

  /*   checkSavedAlbumCount() {
    return this.getUserAlbums.subscribe((data: any) => {});
  } */
}
