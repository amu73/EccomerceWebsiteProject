import { Component, OnInit } from '@angular/core';
import { Validator, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { __asyncDelegator } from 'tslib';
// import { RegistrationServiceService } from '../Service/registration-service.service';
// import { UserRegistration } from '../user-registration';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserRegistration } from 'src/app/MyClass/user-registration';
import { RegistrationServiceService } from 'src/app/Service/registration-service.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public showPassword: boolean = false;
  public showPasswordd: boolean = false;
  public registrationForm!: FormGroup
  public obj: any;
  public invalid: any;
  public touched: any;
  public userregistration: UserRegistration = new UserRegistration();
  constructor(private formBuilder: FormBuilder, public api: RegistrationServiceService, public router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(2), Validators.pattern("[a-zA-z].*")]),
      firstname: new FormControl('', [Validators.required, Validators.pattern("[a-zA-z].*"), Validators.minLength(2), Validators.maxLength(30)]),
      lastname: new FormControl('', [Validators.required, Validators.pattern("[a-zA-z].*"), Validators.minLength(2)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confirmpassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
      term: new FormControl('', [Validators.required])
    })

  }
  
  

  saveUser() {
    if (!(this.userregistration.confirmpassword == this.userregistration.password)) {
      Swal.fire("invalid", "password and confirm password does not match", "warning");
      return;
    }
    else {

      this.api.postCustomerRecord(this.userregistration)
        .subscribe({
          next: (res) => {
            Swal.fire("registration successfull", "success");
            this.registrationForm.reset();
            this.router.navigate(['loginCustomer']);
          },
          error: () => {
            Swal.fire("email warning", "This email is already registered", "error");
          }
        })
    }
  }
  // hide : boolean = true;

  public togglePassword() {
    this.showPassword = !this.showPassword;
  }
  public togglePasswordd() {
    this.showPasswordd = !this.showPasswordd;
  }

}