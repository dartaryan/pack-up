import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEdit, faSearch, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { map, Observable } from 'rxjs';
import { Item } from '../../models/item';
import { ItemModule } from '../../modules/item.module';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule, FormsModule, ItemModule, RouterLink, FaIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  readonly faEdit = faEdit;
  readonly faTrashAlt = faTrashAlt;
  readonly faSearch = faSearch;
  private itemService = inject(ItemService);
  public items$: Observable<Item[]> = this.itemService.getItems();

  public onDelete(id: number): void {
    this.itemService.deleteItem(id).subscribe((data) => {
      this.items$ = this.itemService.getItems()
    });
  }

  public filterItems(input: string): void {
    this.items$ = this.itemService.getItems().pipe(map((items) => items.filter((item) => item.name.includes(input) || item.status.includes(input) || item.packlist.includes(input) || item.id.toString().includes(input))));
  }

}
