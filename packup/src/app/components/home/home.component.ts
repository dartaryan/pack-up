import {Component, inject} from '@angular/core';
import {Item} from '../../models/item';
import {ItemService} from '../../services/item.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ItemModule} from '../../modules/item.module';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule, FormsModule, ItemModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  private itemService = inject(ItemService);
  public items$: Observable<Item[]> = this.itemService.getItems();
}
