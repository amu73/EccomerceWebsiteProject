import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterPriceBrandComponent } from './MyComponent/filter-price-brand/filter-price-brand.component';
import { FilterbyPriceDescComponent } from './MyComponent/filterby-price-desc/filterby-price-desc.component';
import { FilterbypriceComponent } from './MyComponent/filterbyprice/filterbyprice.component';
import { OrderplacedComponent } from './MyComponent/orderplaced/orderplaced.component';
import { ProductHomeComponent } from './MyComponent/product-home/product-home.component';
import { RegistrationComponent } from './MyComponent/registration/registration.component';
import { SearchbyProductCodeComponent } from './MyComponent/searchby-product-code/searchby-product-code.component';
import { SerachbybrandComponent } from './MyComponent/serachbybrand/serachbybrand.component';
import { SuccessComponent } from './MyComponent/success/success.component';
import { UserComponent } from './MyComponent/user/user.component';
import { ViewDetailsComponent } from './MyComponent/view-details/view-details.component';


const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'reg', component: RegistrationComponent },
  { path: 'productHome', component: ProductHomeComponent },
  { path: 'filterByPrice', component: FilterbypriceComponent },
  { path: 'filterByPriceDesc', component: FilterbyPriceDescComponent },
  { path: 'searchbybrand', component: SerachbybrandComponent },
  { path: 'searchbyproductcode', component: SearchbyProductCodeComponent },
  { path: 'fiterByPriceBrand', component: FilterPriceBrandComponent },
  { path: 'viewDetails', component: ViewDetailsComponent },
  { path: 'orderPlaced', component: OrderplacedComponent },
  { path: 'success', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
