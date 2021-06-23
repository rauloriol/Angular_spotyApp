
// contiene las rutas que yo voy a utilizar en mi aplicacion

import { Routes } from '@angular/router'; // basico para las rutas

// importados de mis componentes
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component'; // (105)



// /(94) 1.05 MIN
export const ROUTES: Routes = [

  {path: 'home', component: HomeComponent}, // path para  home compoent lo ponemos en navbar.component.html
  {path: 'search', component: SearchComponent }, // path para searcg componente lo ponemos en navbar.component.html
  {path: 'artist/:id', component: ArtistaComponent }, // path para buscar un artista por su id (105)
  {path: '', pathMatch: 'full', redirectTo: 'home'}, // Cualquierpath me llevaria a home
  {path: '**', pathMatch: 'full', redirectTo: 'home'}, // el ultimo por defecto

];
