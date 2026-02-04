import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { PriceFilterComponent } from './filtering/price-filter/price-filter.component';
import { NgxSliderModule } from 'ngx-slider-v2';
import { StatusFilterComponent } from './filtering/status-filter/status-filter.component';
import { ShopAreaComponent } from './shop-area/shop-area.component';
import { CategoryFilterComponent } from './filtering/category-filter/category-filter.component';
import { ResetFilterRouteComponent } from './filtering/reset-filter-route/reset-filter-route.component';


@NgModule({
  declarations: [
    PriceFilterComponent,
    ShopComponent,
    ProductsComponent,
    ProductItemComponent,
    CartComponent,
    ShopAreaComponent,
    CategoryFilterComponent,
    StatusFilterComponent,
    ResetFilterRouteComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgxSliderModule,
    ShopRoutingModule
  ],
  exports: [
    ProductsComponent,
    ProductItemComponent,
    ShopAreaComponent,
    CategoryFilterComponent,
    StatusFilterComponent,
    PriceFilterComponent,
    ResetFilterRouteComponent
  ]
})
export class ShopModule { }
