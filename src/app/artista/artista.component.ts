import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../services/spotify.service";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent{
  artista: any = {};
  topTracks: any[] = [];
  loadingArtists: boolean;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
   this.loadingArtists = true;
    // sirve para ver todos los parametros que viene por url
    this.router.params.subscribe(params => {
      console.log(params['id']);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
      this.loadingArtists = false;
    });
  }
  // tslint:disable-next-line:typedef
  getArtista(id: string){
    this.loadingArtists = true;
    this.spotify.getArtista(id)
      .subscribe(artista => {
        console.log(artista);
        this.artista = artista;
    });
  }
  getTopTracks(id: string){
    this.spotify.getTopTracks(id)
      .subscribe( topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      });
  }

}
