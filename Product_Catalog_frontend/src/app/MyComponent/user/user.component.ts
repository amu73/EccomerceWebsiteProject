import { Component, OnInit } from '@angular/core';
import { Validator, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { zip } from 'rxjs';
import { __asyncDelegator } from 'tslib';
// import { RegistrationServiceService } from '../Service/registration-service.service';
// import { UserRegistration } from '../user-registration';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';
import { UserRegistration } from 'src/app/MyClass/user-registration';
import { RegistrationServiceService } from 'src/app/Service/registration-service.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public showPassword: boolean = false;
  password = 'pwd'
  public loginForm!: FormGroup
  public obj: any;
  public userregistration: UserRegistration = new UserRegistration();
  constructor(private formBuilder: FormBuilder, public api: RegistrationServiceService, public router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(2),Validators.pattern("[a-zA-z].*")]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),

    })
  }
  checkUser() {
    this.api.postLoginRecord(this.userregistration)
      .subscribe({
        next: (res) => {

          localStorage.setItem("UserRegistration", JSON.stringify(res));
          Swal.fire("sucessful", "login Successfull", "success");
          this.router.navigate(['productHome']);
        },
        error: () => {
          Swal.fire("invalid", "please enter valid email or password", "error");
          this.loginForm.reset();

        }
      })
  }
  hide : boolean = true;

  public togglePassword() {
    this.showPassword = !this.showPassword;
  }
}