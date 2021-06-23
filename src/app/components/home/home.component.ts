import { Component, OnInit } from '@angular/core';
// se importa el httpclient para hacer consultas a la api
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/servicio/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {

  // (98) 2.54 min para pasarle el ngfor y nos devuelva los datos del array de spotyfy
  nuevasCanciones: any[] = [];  // tipo array, tengo que iterar dentro del array en la api



  // ((97) 9.48 min importamos el servicio en el componente home nada mas se inicie la aplicacion
  constructor( private spotifyServicio: SpotifyService) {

    this.spotifyServicio.getNewReleases().subscribe( (datos: any) => {   // (98) 4.10 min cambiar los datos a tipo any
      //console.log(datos);
      this.nuevasCanciones = datos;  // (98) para que el ngfor busque donde toca dentro del array[] (100) 4.45min eliminado datos.albums.items

                        });


   }



}
