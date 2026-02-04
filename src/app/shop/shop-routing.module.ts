import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path:'shop',
    component:ShopComponent,
    title:'Shop Page'
  },
  {
    path:'shop-details/:id',
    component:ProductDetailsComponent,
    title:'Shop Details Page'
  },
  {
    path:'cart',
    component:CartComponent,
    title:'Shop cart Page'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
