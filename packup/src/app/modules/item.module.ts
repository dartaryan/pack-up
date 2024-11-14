import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItemRoutingModule} from './item-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [], imports: [CommonModule, ItemRoutingModule, FormsModule, ReactiveFormsModule]
})

export class ItemModule {
}
