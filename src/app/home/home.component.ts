import { Component, OnInit } from '@angular/core';

import { SpotifyService} from "../services/spotify.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  nuevasCanciones: any [] = [];
  loading: boolean;
  mensajeError: string;
  error = false;
  constructor(private spotify: SpotifyService ) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      }, (errorServicio) => {
        this.loading = false;
        this.error = true;
        console.log(errorServicio);
        console.log(errorServicio.error.error.message);
        this.mensajeError = errorServicio.error.error.message;
      });
  }


}
