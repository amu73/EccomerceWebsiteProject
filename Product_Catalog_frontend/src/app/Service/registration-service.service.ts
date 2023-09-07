import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegistration } from '../MyClass/user-registration';
// import { UserRegistration } from '../user-registration';
@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
  
  constructor(private http:HttpClient) { }
  public baseUrl:String="http://localhost:8089";
  postCustomerRecord(userRegistration:UserRegistration):Observable<object>{
  
    return this.http.post<object>(`${this.baseUrl}`+"/registration",userRegistration);

    
  }
  postLoginRecord(userRegistration:UserRegistration):Observable<object>{
    return  this.http.post<object>(`${this.baseUrl}`+"/login",userRegistration);
    }
   
  
  }