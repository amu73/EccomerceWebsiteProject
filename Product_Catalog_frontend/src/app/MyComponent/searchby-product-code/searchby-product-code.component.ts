import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-searchby-product-code',
  templateUrl: './searchby-product-code.component.html',
  styleUrls: ['./searchby-product-code.component.css']
})
export class SearchbyProductCodeComponent implements OnInit {

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
    localStorage.removeItem("UserRegistration")
    Swal.fire("logout successfully", "Logout", "success")
    this.router.navigate(['/']);
  }
  search(event: any) {

  // if (!(this.searchTerm = (event.target as HTMLInputElement).value)) {
  //   Swal.fire("invalid", "password and confirm password does not match", "warning");
   
  // }
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.productService.search.next(this.searchTerm);
  

  }
  viewDetails(id: number) {
    Swal.fire("", "WelCome", "success")

    this.router.navigate(['/viewDetails'], { queryParams: { id: id } });
  }
}





