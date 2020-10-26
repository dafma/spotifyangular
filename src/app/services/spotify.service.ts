import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

// forma automatica para importar serrvicios
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization : 'Bearer BQA05IPLynEkZ472pc12t4ECKf5SpGuT7ecAiOo3bnT0huKz44W3063ptgkl1_-m1rWVUUj4e1kW6VtfW8I'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases(){
      return this.getQuery('browse/new-releases?limit=20')
                 .pipe( map( data  =>  data['albums'].items));
  }
  getArtistas( termino: string ) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map(data => data['artists'].items));
  }
  getArtista( id: string ) {
    return this.getQuery(`artists/${ id }`);
      //.pipe( map(data => data['artists'].items));
  }
  getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe( map(data =>  data['tracks']));
  }
}
