import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"; // (105) 7.37 min  para saber cual es la ruta activa
import { SpotifyService } from '../../servicio/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent  {


  artista: any = {};   // (106) 5.17 min
  topCanciones: any[] = []; // (107) 4.27 min hago una variable con el arry de canciones top y lo igualo abajo le hago un NgFOR en el html para buscarlo



  constructor(  private router: ActivatedRoute, private SpotifyService:SpotifyService  ) { //(106) inyectamos el servicio de spotyfi que es en donde esta el query


  this.router.params.subscribe( respuesta=>{   //(105) params.subscribe es suscribirse a un obserbable y ver cualquier cambio que se produzca
  this.obtenerArtista(respuesta['id']);       // (106) 3.37 minllamamos a la funcion obtener artista
  this.obtenerCancionesTope(respuesta['id']); // (107) 2.06 min llamamos al metodo que tenemos abajo

})}

   obtenerArtista(id: string){  //(106) 3.31 min recibe un artista si es que llamo al query del servicio
    this.SpotifyService.getArtist(id)
        .subscribe( datosArtista =>{
                                     console.log(datosArtista);
                                      this.artista = datosArtista; //(106) 5.26 min recibo los datos del servicio suscribe
                                    })}


  obtenerCancionesTope(id: string){
    this.SpotifyService.getTopCanciones(id)
        .subscribe(datosCancionesTop => {
                                    this.topCanciones= datosCancionesTop;
                                    console.log(datosCancionesTop);       //(107) 2.00 min recibo los datos del servicio suscribe
    })
  }

}// fin del la clase
