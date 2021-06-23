import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinimagen'
})
export class SinimagenPipe implements PipeTransform {

  // (102) 2.30 min hacer un pipe para que antes que el buscador muestre resultados pasarlo por el pipe y corregirlo
  transform(imagenes: any[]): string {

    // (102) Si imagenes no existe que nos devuelva la imagen siguiente
    if ( !imagenes ) {
      return 'assets/img/noimage.png';

    }
    // (102) Si que existe por que el array es mayor de cero devuelve el array[].url
    if (imagenes.length>0) {
      return imagenes[0].url;

    }
    else{
      return 'assets/img/noimage.png';
    }

  }

}
