import { Component } from '@angular/core';
import { SpotifyService } from '../../servicio/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent  {


  artistas: any[] = [];                                    //(99) 7.25 min para buscar en el array del json


  constructor(private spotifyServicio: SpotifyService) { } // (99) 5.17 min importamos el SERVICIO de Spotify


  buscar(busquedaBarra: string){                          // (99) 2.21 min lo que tengo en el html del #es lo que pasara por el metodo para buscarlo

    console.log(busquedaBarra);
    this.spotifyServicio.getArtista( busquedaBarra ).subscribe( (datos: any) => {

      console.log(datos);
      this.artistas = datos;
    });

  }

}
