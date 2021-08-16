import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { LandingComponent } from './components/landing/landing.component';
import { TopAlbumsComponent } from './components/top-albums/top-albums.component';
import { TopArtistsComponent } from './components/top-artists/top-artists.component';
import { TopSongsComponent } from './components/top-songs/top-songs.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'top-songs', component: TopSongsComponent },
  { path: 'top-albums', component: TopAlbumsComponent },
  { path: 'top-artists', component: TopArtistsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
