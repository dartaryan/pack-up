import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

export const routes: Routes = [
  {path: 'items/home', component: HomeComponent},
  {path: 'items', redirectTo: 'items/home', pathMatch: 'full'},
  {path: '', redirectTo: 'items/home', pathMatch: 'full'},
];
