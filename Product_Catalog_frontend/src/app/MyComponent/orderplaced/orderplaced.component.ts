import { Component, OnInit } from '@angular/core';
// import { Pincode } from '../pincode';
import { ProductService } from 'src/app/Service/product.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Validator, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Pincode } from 'src/app/MyClass/pincode';
@Component({
  selector: 'app-orderplaced',
  templateUrl: './orderplaced.component.html',
  styleUrls: ['./orderplaced.component.css']
})
export class OrderplacedComponent implements OnInit {
  public PinFrom!: FormGroup;
  public pcode: Pincode = new Pincode();
  public pay: boolean = true;
  constructor(private productService: ProductService, private formBuilder: FormBuilder, public router: Router) {
    this.check();
  }
  check() {
    if (localStorage.getItem("UserRegistration") == null) {
      Swal.fire("logout", "something went wrong", "warning");
      this.router.navigate(["/"]);
    }
  }
  ngOnInit(): void {
    this.PinFrom = this.formBuilder.group(
      {
        pincode: new FormControl('', [Validators.required, Validators.pattern("[0-9].*"), Validators.minLength(5)]),
      }
    )
  }
  checkPin() {
    if (localStorage.getItem("UserRegistration") == null) {
      Swal.fire("logout", "something went wrong", "warning");
      this.router.navigate(["/"]);
    }
    this.pay = true;
    console.log(this.pcode.pincode)
    this.productService.checkPinCode(this.pcode.pincode)
      .subscribe({
        next: (res) => {
          if (localStorage.getItem("UserRegistration") == null) {
            Swal.fire("logout", "something went wrong", "warning");
            this.router.navigate(["/"]);
          }
          this.pay = false;
          Swal.fire("product is serviceable/deliverable", res.msg, "success");

        },
        error: () => {
          Swal.fire("sorry", "prouduct is not deliverable on this address ", "error");
        }
      })
  }


}
