import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent{

  constructor(private router: ActivatedRoute) {
    // sirve para ver todos los parametros que viene por url
    this.router.params.subscribe(params => {
      console.log(params['id']);
    });
  }


}
