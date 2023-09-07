import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';
import Swal from 'sweetalert2';
import { ThisReceiver } from '@angular/compiler';
// import { Pincode } from '../pincode';
import { Validator, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Pincode } from 'src/app/MyClass/pincode';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  public allProductList: any = [];
  public pcode: Pincode = new Pincode();
  public searchkey: any = "";
  public searchTerm: any = "";
  public id: any = [];
  public checkForm!: FormGroup;
  constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.check();
  }
  check() {
    if (localStorage.getItem("UserRegistration") == null) {
      Swal.fire("logout", "something went wrong", "warning");
      this.router.navigate(["/"]);
    }
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((Params: any) => {
      this.id = Params;
    }
    );
    this.productService.getAllProductbyId(this.id.id).subscribe({
      next: (res) => {

        console.log(res);
        this.allProductList.push(res);
      }
      ,
      error: () => {
        Swal.fire("somthing went wrong no record added", "no record found", "warning")
      }
    });
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
  checkPin() {
    this.productService.checkPinCode(this.pcode.pincode)
      .subscribe({
        next: (res) => {
          if (localStorage.getItem("UserRegistration") == null) {
            Swal.fire("logout", "something went wrong", "warning");
            this.router.navigate(["/"]);
          }
          Swal.fire("deliverable", res.msg, "success")
          this.router.navigate(['/loginCustomer']);

        },
        error: () => {
          Swal.fire("sorry", "prouduct is not deliverable of this address", "error");
        }
      })
  }
}


