import { CartService } from '@/services/cart.service';
import { ProductService } from '@/services/product.service';
import { IProduct } from '@/types/product-type';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-details-wrapper',
  templateUrl: './product-details-wrapper.component.html',
  styleUrls: ['./product-details-wrapper.component.scss']
})
export class ProductDetailsWrapperComponent {
  @Input() product!: IProduct;
  @Input() isShowBottom: boolean = true;

  textMore = false;

  handleTextToggle() {
    this.textMore = !this.textMore;
  }

  constructor(
    public productService: ProductService,
    public cartService: CartService
  ) {}

  handleIsColorVariant(product: IProduct) {
    if (product.imageURLs.some((item) => item?.color && item?.color?.name)) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {}
}
