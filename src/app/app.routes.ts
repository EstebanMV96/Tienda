import { RouterModule, Routes } from '@angular/router';
import {AboutComponent, ItemComponent, PortafolioComponent} from './components/index.paginas';

const routes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const appRouting = RouterModule.forRoot(routes, {useHash: true});
