import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { map } from 'rxjs/operators'; // (100) 2.35 min para filtar los datos que nos devuelve la peticion get sin colocar datos.items...blabal
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio listo');}


   getQuery(query: string){ //(101) para centralizar las busquedas con un query
     const url = `https://api.spotify.com/v1/${query}`;

    // autorizacion de la api de spotify lleva el Bearer
     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBaLVOfA7F7kHeSticKw1R2v68yPpTLm2_EJ-flJ8hJcj11-dHnQdwVHVFcmNrQ8cjKld0lXK-UWxJbktk'
    });

      return this.http.get(url,{headers});

   }

   // Peticion a la api mediante peticion get (97)  8.22 min
   getNewReleases(){
     return this.getQuery('browse/new-releases?limit=20').pipe( map( data => data['albums'].items

     ));
   }


   //(99) 3.51 min para hacer el get de un artista
   getArtista(busquedaBarra: string){

    // (101) 5.57 min los backtips y la busqueda nueva
    return this.getQuery(`search?q=${ busquedaBarra }&type=artist&limit=15`).pipe(  map ( data=> data['artists'].items ));

}
  getArtist(id: string){

  // (106) 1.15 min es la busqueda para que nos muestre solo la tarjeta de un artista
  return this.getQuery(`artists/${id}`);

}

  getTopCanciones(id: string){

    return this.getQuery(`artists/${id}/top-tracks?country=es`) // (107) 1.11 min es la busqueda para que nos muestre las canciones top del artista mediante el api de spotify
    .pipe(map (datos => datos['tracks']));                      // (107) 4.13 min hacemos un pipe map para darle formato a los datos que nos da el servicio que vienen de los tracks
                                                                // Asi tengo un arreglo [] con toda la informacion


  }



}






