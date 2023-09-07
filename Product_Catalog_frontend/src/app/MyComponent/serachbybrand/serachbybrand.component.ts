import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductService } from 'src/app/Service/product.service';
import { query } from '@angular/animations';
@Component({
  selector: 'app-serachbybrand',
  templateUrl: './serachbybrand.component.html',
  styleUrls: ['./serachbybrand.component.css']
})
export class SerachbybrandComponent implements OnInit {

  public allProductList: any = []
  public searchkey: any = "";
  public searchTerm: any = "";
  hasQuery:Boolean=false
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
    // let m:any = query.match(/\s*/);
    // let matchSpaces:any = query.match(/\s*/);
    // if(matchSpaces[0]==query){
    //   this.searchTerm=[]
      
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




