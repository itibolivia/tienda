import { ProductService } from '@/services/product.service';
import { IProduct } from '@/types/product-type';
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
public products:IProduct[] = [];
public perView: number = 12;

  constructor(private cdr: ChangeDetectorRef,public productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.products = products;//.filter((p) => p.productType != 'electronics');
      this.filteredProducts = this.getFilteredProducts();
    });
  }
  // tab
  public activeTab = 'New';
  public tabs = ['New', 'Featured', 'Top Sellers'];
  // handleActiveTab
  handleActiveTab(tab: string): void {
    this.activeTab = tab;
    this.filteredProducts = this.getFilteredProducts(); // Update the filtered products
    this.cdr.detectChanges(); // Trigger change detection
  }
  // filtered Products
  filteredProducts = this.getFilteredProducts(); // Initialize with default filtering
  // get Filtered Products
  getFilteredProducts(): IProduct[] {
    if (this.activeTab === 'New') {
      return this.products;
    } else if (this.activeTab === 'Featured') {
      return this.products.filter((product) => product.featured);
    } else if (this.activeTab === 'Top Sellers') {
      return this.products
        .slice()
        .sort((a, b) => (b.sellCount ?? 0) - (a.sellCount ?? 0))
        .slice(0, 8);
    } else {
      return [];
    }
  }

  handlePerView(): void {
    this.perView += 8;
  }
}
