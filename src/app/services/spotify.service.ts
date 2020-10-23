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
      Authorization : 'Bearer BQAKV1HkUzB4KAPf-BVU5AEN7M1xS0DepaFGYTCN0Z9RTz5zZO0I0VaEAMM1MS6AWsXHdtVkDwuap_vCIGw'
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
