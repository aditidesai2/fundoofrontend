import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpService } from '../services/http-service.service'
import { Observable } from 'rxjs';
import { UserModel} from '../model/user-model'
import { RegisterModel } from '../model/register-model';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private _http: HttpClient, private httpservice: HttpService) { }

  public login(user: UserModel):Observable<any>{
    console.log(user);
    console.log('In login service');
    return this.httpservice.post('http://localhost:8085/user/login', user, this.httpOptions);
  }

  public registration(user: RegisterModel):Observable<any> {
    return this.httpservice.post('http://localhost:8085/user/registration', user, this.httpOptions);
  }

  public sendEmail(user: UserModel) {
    console.log(user);
    return this.httpservice.post('http://localhost:8085/user/forgotPassword', user, this.httpOptions);
    console.log('entered into registeruser in service');
  }

   public activateUser(user:any,token:string):Observable<any>
  {
    console.log("calling to.."+`${this.activateUser}/${token}`);
    return this.httpservice.put('http://localhost:8085/user/verification/'+`${token}`,user,this.httpOptions);
  }

  public updatePassword (user:any, token:string):Observable<any>
  {
    console.log("Inside update password service");
    return this.httpservice.put('http://localhost:8085/user/updatePassword/'+`${token}`,user,this.httpOptions);
  }
}
