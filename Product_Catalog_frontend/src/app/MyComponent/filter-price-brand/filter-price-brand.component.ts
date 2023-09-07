import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';
// import { ProductService } from '../Service/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-filter-price-brand',
  templateUrl: './filter-price-brand.component.html',
  styleUrls: ['./filter-price-brand.component.css']
})
export class FilterPriceBrandComponent implements OnInit {

  public searchkey: any = "";
  public searchTerm: any = "";
  public allProductList: any = []
  public value: boolean = false;
  constructor(private router: Router, private productService: ProductService) {
    this.check();
  }
  check() {
    if (localStorage.getItem("UserRegistration") == null) {
      Swal.fire("logout", "something went wrong", "warning");
      this.router.navigate(["/"]);
    }
  }
  ngOnInit(): void {
    this.productService.getAllProductByPrice()
      .subscribe({
        next: (res) => {
          if (localStorage.getItem("UserRegistration") == null) {
            this.value = true;
            this.router.navigate(["/"]);
          }
          console.log(res)
          this.allProductList = res;

        },
        error: () => {
          Swal.fire("somthing went wrong no record added", "no record found", "warning")
        }
      });

    this.productService.search.subscribe((val: any) => {
      this.searchkey = val;
    })


  }
  logout() {
    if (localStorage.getItem("UserRegistration") == null) {
      Swal.fire("logout", "something went wrong", "warning");
      this.router.navigate(["/"]);
    }
    localStorage.removeItem("UserRegistration")
    Swal.fire("logout successfully", "Logout", "success")
    this.router.navigate(['/']);
  }
  search(event: any) {
    if (localStorage.getItem("UserRegistration") == null) {
      this.value = true;
      this.router.navigate(["/"]);
    }
      this.searchTerm = (event.target as HTMLInputElement).value;
      console.log(this.searchTerm);
      this.productService.search.next(this.searchTerm);
  }
  viewDetails(id: number) {
    if (localStorage.getItem("UserRegistration") == null) {
      this.value = true;
      this.router.navigate(["/"]);
    }
    Swal.fire("", "WelCome", "success")

    this.router.navigate(['/viewDetails'], { queryParams: { id: id } });
  }
}
