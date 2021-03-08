import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'https://api.spotify.com';

  getUserAlbums(): Observable<any> {
    return this.http.get(`${this.apiUrl}/v1/me/albums?limit=50`);
  }

  /*   checkSavedAlbumCount() {
    return this.getUserAlbums.subscribe((data: any) => {});
  } */
}
