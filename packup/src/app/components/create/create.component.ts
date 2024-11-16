import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  public item: Item = {
    id: 0, name: '', packlist: '', status: ''
  }
  private itemService = inject(ItemService);
  private router = inject(Router);

  public onSubmit(): void {
    this.itemService.createItem(this.item).subscribe({
      next: () => this.router.navigate(['/items']), error: console.error
    });
  }

  public onCancel(): void {
    this.router.navigate(['/items']);
  }
}
