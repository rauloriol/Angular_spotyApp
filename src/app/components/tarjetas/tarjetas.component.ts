import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';  // (105) 5.50 min para acceder a la ruta del artista

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',

})
export class TarjetasComponent {



  //(103) 3.25 min hago un imput de la imformacion que recibo del home.component/html
@Input() items:any[]= [];

  constructor(  private router: Router ) { }

  // (105) Ver artista del metodo click
  verArtista(item: any){

    let artistaId;

    if (item.type === 'artist') {
      artistaId = item.id;
    }
    else{
      artistaId = item.artists[0].id;
    }
    console.log(artistaId);

    this.router.navigate(['/artist', artistaId]); // nos lleva a la ruta del artista

  }


}
