import { CartService } from '@/services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.scss']
})
export class CartSidebarComponent {

constructor(public cartService:CartService){}
}
