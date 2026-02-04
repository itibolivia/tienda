import { Router  } from '@angular/router';
import { Component,Renderer2  } from '@angular/core';
import category_data from '@/data/category-data';
import { CategorysService } from '@/services/categorys.service';
import { ICategory } from "@/types/category-type";

@Component({
  selector: 'app-header-category',
  templateUrl: './header-category.component.html',
  styleUrls: ['./header-category.component.scss']
})
export class HeaderCategoryComponent {

 //public categoryItems = category_data.filter(c => c.productType === "electronics");
 public categoryItems: ICategory[] = [];
 public isActive:boolean = false;

 constructor(private router: Router, private renderer: Renderer2,
  public categoyService: CategorysService) {
    this.categoyService.categorys.subscribe((categorys) => {
      this.categoryItems = categorys;
    });
  }

public handleActive(): void {
  this.isActive = !this.isActive;
}

  public handleParentCategory(value: string): void {
    const newCategory = value.toLowerCase().replace("&", "").split(" ").join("-");
    this.router.navigate(['/shop'], { queryParams: { category: newCategory } });
  }

  public handleSubCategory(value: string): void {
    const newCategory = value.toLowerCase().replace("&", "").split(" ").join("-");
    this.router.navigate(['/shop'], { queryParams: { subcategory: newCategory } });
  }
}
