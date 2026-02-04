import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';
import { UtilsService } from '../services/utils.service';
import { IProduct } from '../types/product-type';
import { ICategory } from '@/types/category-type';
import { CategorysService } from '@/services/categorys.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public products: IProduct[] = [];
  public searchText: string = '';
  public productType: string = '';

  public categoryData: ICategory[] = [];//category_data;
  // select options for header category
  public niceSelectOptions = [
    { value: 'select-category', text: 'Seleccionar categoria' }
  ];

  constructor(
    public cartService: CartService,
    public wishlistService: WishlistService,
    public utilsService: UtilsService,
    private router: Router,
    public categoyService: CategorysService
  ) {
    this.categoyService.categorys.subscribe((categorys) => {
      this.categoryData = categorys;

      this.niceSelectOptions = [
        ...this.categoryData.map(category => ({
          value: category.parent,
          text: category.parent
        }))
      ];
    })
}

  

changeHandler(selectedOption: { value: string; text: string }) {
  //console.log('Selected option:', selectedOption);
  this.productType = selectedOption.value;
}

headerSticky: boolean = false;

// sticky nav
@HostListener('window:scroll')/*, ['$event']) */ onscroll() {
  if (window.scrollY > 80) {
    this.headerSticky = true;
  } else {
    this.headerSticky = false;
  }
}

handleSearchSubmit() {
  const queryParams: { [key: string]: string | null } = {};
  if (!this.searchText && !this.productType) {
    return
  }
  else {
    if (this.searchText) {
      queryParams['searchText'] = this.searchText;
    }
    if (this.productType) {
      queryParams['productType'] = this.productType;
    }
    this.router.navigate(['/pages/search'], { queryParams });
  }
}
}
