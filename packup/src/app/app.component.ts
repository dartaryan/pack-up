import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ItemModule} from './modules/item.module';
import {AsyncPipe} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faHome, faPlus, faSearch, faSuitcaseRolling} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, FormsModule, ItemModule, AsyncPipe, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'packup';
  protected readonly faHome = faHome;
  protected readonly faSuitcaseRolling = faSuitcaseRolling;
  protected readonly faSearch = faSearch;
  protected readonly faPlus = faPlus;
}
