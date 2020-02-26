import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { UserModel} from '../model/user-model'

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public login(user: UserModel){
    console.log(user);
    return this.http.post(`http://localhost:8084/user/login`, user, this.httpOptions);
  }

  public registration(user: any) {
    return this.http.post('http://localhost:8084/user/registration', user, this.httpOptions);
  }
}
