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
      Authorization : 'Bearer BQC9qii4uQYfLt7fNdp1ma-8oKePw03Sb7eM68sHGh_iXFq46dhR2El3_KQHppzNURXYo95vcAJTt9eVkQc'
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
