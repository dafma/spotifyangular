import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ArtistaComponent } from './artista/artista.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

// pipes
import { NoimagesPipe} from "./pipes/noimages.pipe";

// importar rutas
import { ROUTES } from './app.router';

// services
import { SpotifyService } from './services/spotify.service';
import { TarjetasComponent } from './search/tarjetas/tarjetas.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagesPipe,
    TarjetasComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
