import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-filterbyprice',
  templateUrl: './filterbyprice.component.html',
  styleUrls: ['./filterbyprice.component.css']
})
export class FilterbypriceComponent implements OnInit {
  public searchkey: any = "";
  public searchTerm: any = "";
  public allProductList: any = []
  public value: boolean = false;
  constructor(private router: Router, private productService: ProductService) {
    this.check();
  }
  check() {
    if (localStorage.getItem("UserRegistration") == null) {
      this.value = true;
      Swal.fire("logout", "something went wrong", "warning");
      this.router.navigate(["/"]);
    }
  }
  ngOnInit(): void {
    this.productService.getAllProductByPrice()
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
      if (localStorage.getItem("UserRegistration") == null) {
        this.value = true;
        Swal.fire("logout", "something went wrong", "warning");
        this.router.navigate(["/"]);
      }
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
    console.log(this.searchTerm);
    this.productService.search.next(this.searchTerm);
  }
  viewDetails(id: number) {
    Swal.fire("", "WelCome", "success")

    this.router.navigate(['/viewDetails'], { queryParams: { id: id } });
  }
}
