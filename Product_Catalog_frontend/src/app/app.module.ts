import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { RegistrationComponent } from './MyComponent/registration';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
// import { UserRegistration } from './user-registration';
import { FormsModule } from '@angular/forms';
import { ProductHomeComponent } from './MyComponent/product-home/product-home.component';
import { FilterbypriceComponent } from './MyComponent/filterbyprice/filterbyprice.component';
import { FilterPipe } from './shared/filter.pipe';
import { SerachbybrandComponent } from './MyComponent/serachbybrand/serachbybrand.component';
import { FilterPriceBrandComponent } from './MyComponent/filter-price-brand/filter-price-brand.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { ViewDetailsComponent } from './MyComponent/view-details/view-details.component';
import { OrderplacedComponent } from './MyComponent/orderplaced/orderplaced.component';
import { SuccessComponent } from './MyComponent/success/success.component';
import { UserComponent } from './MyComponent/user/user.component';
import { SearchbyProductCodeComponent } from './MyComponent/searchby-product-code/searchby-product-code.component';
import { FilterbyPriceDescComponent } from './MyComponent/filterby-price-desc/filterby-price-desc.component';
import { RegistrationComponent } from './MyComponent/registration/registration.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ProductHomeComponent,
    FilterbypriceComponent,
    FilterPipe,
    SerachbybrandComponent,
    FilterPriceBrandComponent,
    ViewDetailsComponent,
    OrderplacedComponent,
    SuccessComponent,
    UserComponent,
    SearchbyProductCodeComponent,
    FilterbyPriceDescComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    // TooltipModule,
    MatMenuModule,
    MatRadioModule,
    MatIconModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
