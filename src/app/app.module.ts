import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // (94) 2.37 min

// para leer peticiones api (get y post) (95) 2.08 min
import { HttpClientModule } from '@angular/common/http';

// COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

// imporatmos el modulo de RUTAS
import { ROUTES } from './app.routes';

// Importamos servicios
import {SpotifyService} from './servicio/spotify.service';

//importamos pipe
import { SinimagenPipe } from './pipes/sinimagen.pipe';  // (97) min 6.35 añadir el servicio de la api




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    SinimagenPipe,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,{useHash: true}) // lo colocamos en los imports (94) 2.44 min / 3.11 min para ROUTES
                                                  // Quiero usaar hash, (94) 3.35 min [useHash : ture]

  ],

  providers: [
    SpotifyService  // (97) min 6.35 añadir el servicio de la api
  ],


  bootstrap: [AppComponent]

})
export class AppModule { }
