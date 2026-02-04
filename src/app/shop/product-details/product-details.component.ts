import { ProductService } from '@/services/product.service';
import { IProduct } from '@/types/product-type';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  productId!: string;
  product?: IProduct;

  constructor(private route: ActivatedRoute,
    public productService: ProductService) {
    /*this.productService.products.subscribe((products) => {
      this.product = products[0];
    });*/
    this.productId = this.route.snapshot.paramMap.get('id')!;

    this.productService.getProductById(this.productId).subscribe(product => {
      if (!product) {
        console.error('Producto no encontrado');
        return;
      }

      this.product = product;
    });
  }
}
