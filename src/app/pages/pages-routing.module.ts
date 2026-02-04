import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:'checkout',
    component:CheckoutComponent,
    title:'Checkout Page'
  },
  {
    path:'search',
    component:SearchComponent,
    title:'Search Page'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
