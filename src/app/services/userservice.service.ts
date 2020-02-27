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
    return this.httpservice.post(`http://localhost:8084/user/login`, user, this.httpOptions);
  }

  public registration(user: RegisterModel):Observable<any> {
    return this.httpservice.post('http://localhost:8084/user/registration', user, this.httpOptions);
  }
}
