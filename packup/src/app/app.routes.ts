import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CreateComponent} from './components/create/create.component';
import {EditComponent} from './components/edit/edit.component';

export const routes: Routes = [
  {path: 'items/home', component: HomeComponent},
  {path: 'items', redirectTo: 'items/home', pathMatch: 'full'},
  {path: '', redirectTo: 'items/home', pathMatch: 'full'},
  {path: 'items/create', component: CreateComponent},
  {path: 'items/edit/:id', component: EditComponent},];
