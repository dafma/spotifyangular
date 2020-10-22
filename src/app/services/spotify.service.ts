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

  getNewReleases(){
      const headers = new HttpHeaders({
      Authorization : 'Bearer BQBmgBSV_k3CkCzvwKiM8G4t5cn1AaQOJ7tPMJPBDdbopgen7gKE3m4U27QbzH3FghDcwV0DZXHUuvNVoFg'
    });
      return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe( map( data  =>  data['albums'].items));
  }
  getArtista( termino: string ) {
      const headers = new HttpHeaders({
      Authorization: 'Bearer BQBmgBSV_k3CkCzvwKiM8G4t5cn1AaQOJ7tPMJPBDdbopgen7gKE3m4U27QbzH3FghDcwV0DZXHUuvNVoFg'
    });
    /*
  return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
    .pipe( map(data => {
      return data['artists'].items;
    })); */
    // PUEDE SER ABREVIADO DE LA SIGUIENTE MANERA
      return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
      .pipe(map(data => data['artists'].items));
  }
}
