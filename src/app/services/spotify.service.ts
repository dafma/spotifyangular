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
      Authorization : 'Bearer BQB8wuc0kSHO-lSOil3MeDHat4LEiHuqzd8uRe4A0V-dVeTLGox3ebt8DkXWiCRLAY-3zArQ-eafz5spFQ4'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases(){
      return this.getQuery('browse/new-releases?limit=20')
                 .pipe( map( data  =>  data['albums'].items));
  }
  getArtista( termino: string ) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map(data => data['artists'].items));
  }
}
