import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import {UserserviceService} from "../../../services/userservice.service"
import { UserModel } from '../../../model/user-model';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(private formBuilder:FormBuilder ,private userservice: UserserviceService, private router: Router, private matSnackBar:MatSnackBar){}


  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required,Validators.minLength(3)]),
      password: new FormControl('', [Validators.required])
    });

  }

    onSubmit() {
    console.log(this.loginForm.value);

    this.userservice.login(this.loginForm.value).subscribe((response: any) => {
      console.log(response.message);
      console.log(response.statusCode);
      if (response.statusCode === 200) {
        this.router.navigate(['/dashboard']);
        this.matSnackBar.open('Successfully Logged in. Welcome!','ok',{duration:5000});


        localStorage.setItem('token', response.obj);
        console.log('Token valid: ', response.obj);
        //this.router.navigate(['/dashboard']);
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
