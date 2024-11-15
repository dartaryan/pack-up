import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Item} from '../../models/item';
import {ItemService} from '../../services/item.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faClipboardCheck, faList, faUserEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, FaIconComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {
  public item: Item = {id: 0, name: '', packlist: '', status: ''}
  public id: number = 0;
  protected readonly faUserEdit = faUserEdit;
  protected readonly faList = faList;
  protected readonly faClipboardCheck = faClipboardCheck;
  private itemService = inject(ItemService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    })
    this.getItemById(this.id);
  }

  getItemById(id: number): void {
    this.itemService.getItem(id).subscribe({
      next: (item) => {
        this.item = item
        console.log(this.item);
      }, error: console.error
    });
  }

  public onEdit(): void {
    this.itemService.updateItem(this.item).subscribe({
      next: () => this.router.navigate(['/items']), error: console.error
    });

  }

  public onCancel(): void {
    this.router.navigate(['/items']);
  }
}
