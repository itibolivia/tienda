import { ProductService } from '@/services/product.service';
import { UtilsService } from '@/services/utils.service';
import { IProduct } from '@/types/product-type';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-details-thumb',
  templateUrl: './product-details-thumb.component.html',
  styleUrls: ['./product-details-thumb.component.scss']
})
export class ProductDetailsThumbComponent {
 @Input() product!: IProduct;

  constructor(
    public productService: ProductService,
    public utilsService: UtilsService
  ) {}

  ngOnInit() {
    if (this.product) {
      this.productService.activeImg = this.product.img;
    }
  }
}
