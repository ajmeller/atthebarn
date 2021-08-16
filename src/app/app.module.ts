import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from 'src/environments/environment';
import { NavComponent } from './components/nav/nav.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { LandingComponent } from './components/landing/landing.component';
import { TopAlbumsComponent } from './components/top-albums/top-albums.component';
import { TopSongsComponent } from './components/top-songs/top-songs.component';
import { TopArtistsComponent } from './components/top-artists/top-artists.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    RankingsComponent,
    LandingComponent,
    TopAlbumsComponent,
    TopSongsComponent,
    TopArtistsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot(environment.auth0),
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
