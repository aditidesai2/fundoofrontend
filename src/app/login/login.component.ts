import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import {UserserviceService} from "../services/userservice.service"
import { UserModel } from '../model/user-model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  errorMessage = '';
  loginForm:FormGroup;
  loading = false;
  username: any;
  password: any;

  constructor(private userservice: UserserviceService, private router: Router){}


  ngOnInit() {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.minLength(3)]),
      password: new FormControl('', [Validators.required])
    });

  }

    onSubmit() {
    console.log(this.loginForm.value);

    this.userservice.login(this.loginForm.value).subscribe((response: any) => {
      console.log(response.message);
      console.log(response.statuscode);
      if (response.statuscode === 200) {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
       } //else {
      //   this.router.navigate(['/login']);
      //   this.errorMessage = response.message;
      //   this.username = '';
      //   this.password = '';
      // }
    },
      error => {
        this.router.navigate(['/login']);
        this.loading = false;
        this.errorMessage = 'invalid credentials';
        this.username = '';
        this.password = '';
      }
    );

  }
 

  
}
