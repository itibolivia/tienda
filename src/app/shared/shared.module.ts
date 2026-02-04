import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NiceSelectComponent } from './ui/nice-select/nice-select.component';
import { MenuBarComponent } from './header/header-com/menu-bar/menu-bar.component';
import { HeaderCategoryComponent } from './header/header-com/header-category/header-category.component';
import { FooterComponent } from './footer/footer.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { CartSidebarComponent } from './components/offcanvas/cart-sidebar/cart-sidebar.component';
import { BreadcrumbOneComponent } from './components/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { ProductModalComponent } from './components/modals/product-modal/product-modal.component';
import { ProductDetailsThumbComponent } from './components/product-details-com/product-details-thumb/product-details-thumb.component';
import { ProductDetailsWrapperComponent } from './components/product-details-com/product-details-wrapper/product-details-wrapper.component';
import { ShopDetailsBreadcrumbComponent } from './components/breadcrumb/shop-details-breadcrumb/shop-details-breadcrumb.component';
import { PaginationComponent } from './ui/pagination/pagination.component';
import { PreloaderComponent } from './preloader/preloader.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NiceSelectComponent,
    MenuBarComponent,
    HeaderCategoryComponent,
    FooterComponent,
    SocialLinksComponent,
    CartSidebarComponent,
    BreadcrumbOneComponent,
    ProductModalComponent,
    ProductDetailsThumbComponent,
    ProductDetailsWrapperComponent,
    ShopDetailsBreadcrumbComponent,
    PaginationComponent,
    PreloaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    NiceSelectComponent,
    MenuBarComponent,
    HeaderCategoryComponent,
    FooterComponent,
    SocialLinksComponent,
    BreadcrumbOneComponent,
    ProductModalComponent,
    ProductDetailsThumbComponent,
    ProductDetailsWrapperComponent,
    ShopDetailsBreadcrumbComponent,
    PaginationComponent,
    PreloaderComponent
  ]
})
export class SharedModule { }
