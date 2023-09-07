import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';
import Swal from 'sweetalert2';
// import { checkMargins } from 'ngx-bootstrap/positioning';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
  public allProductList: any = []
  public searchkey: any = "";
  public searchTerm: any = "";
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

    this.productService.getAllProduct()
      .subscribe({
        next: (res) => {
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

  } logout() {
    if (localStorage.getItem("UserRegistration") == null) {
      Swal.fire("logout", "something went wrong", "warning");
      this.router.navigate(["/"]);
    }
    localStorage.removeItem("UserRegistration")
    Swal.fire("logout successfully", "Logout", "success")
    this.router.navigate(['/']);
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;

    this.productService.search.next(this.searchTerm);
  }
  viewDetails(id: number) {
    console.log(id);
    Swal.fire("", "", "success")

    this.router.navigate(['/viewDetails'], { queryParams: { id: id } });
  }
}



