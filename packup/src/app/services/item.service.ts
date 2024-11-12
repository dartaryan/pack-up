import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private httpClient = inject(HttpClient);
  private baseUrl = '/api/v1/items';

  public getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.baseUrl);
  }

  public getItem(id: number): Observable<Item> {
    return this.httpClient.get<Item>(`${this.baseUrl}/${id}`);
  }
}
