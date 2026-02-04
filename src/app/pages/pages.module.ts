import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from './../shared/shared.module';
import { ShopModule } from '../shop/shop.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ShopModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
