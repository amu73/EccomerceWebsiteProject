import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AllProduct } from '../MyClass/all-product';
import { SwalClass } from '../MyClass/swal-class';
// import { AllProduct } from '../all-product';
// import { Pincode } from '../pincode';
// import { SwalClass } from '../swal-class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getAllProductbyId(id: number): Observable<AllProduct> {
    return this.http.get<any>("http://localhost:8089/Productdetails/" + id);
  }
  public search = new BehaviorSubject<string>("");
  constructor(private http: HttpClient) { }
  getAllProduct() {
    return this.http.get<any>("http://localhost:8089/allProduct");
  }
  getAllProductByPrice() {
    return this.http.get<any>("http://localhost:8089/allProductByPrice");
  }
  getAllProductByPriceDec() {
    return this.http.get<any>("http://localhost:8089/allProductByPriceD");
  }
  checkPinCode(pincode: number): Observable<SwalClass> {
    return this.http.get<any>("http://localhost:8089/deliverypincode/" + pincode);
  }
}
