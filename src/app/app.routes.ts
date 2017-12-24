import { RouterModule, Routes } from '@angular/router';
import {AboutComponent, ItemComponent, PortafolioComponent, SearchComponent} from './components/index.paginas';

const routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'buscar/:termino', component: SearchComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const appRouting = RouterModule.forRoot(routes, {useHash: true});
