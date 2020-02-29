import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import {UserserviceService} from "../../../services/userservice.service"
import { UserModel } from '../../../model/user-model';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from "@angular/router";
import {Router,ParamMap} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})


export class ForgotPasswordComponent implements OnInit {
  
  
  forgotPasswordForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required]),

      newpassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
      conpassword: new FormControl('', [Validators.required, Validators.minLength(4)]),

    }
  );
  loading = true;
  token:string;


  constructor(private formBuilder: FormBuilder, private userservice: UserserviceService,private matSnackBar:MatSnackBar,private route: ActivatedRoute,private route2:Router) { 
  }
  


  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.token = params.get('token');
    });

  
  }

  onSubmit() {
    console.log(this.forgotPasswordForm.value);
    if (this.forgotPasswordForm.invalid) {
      return this.route2.navigate(['user/forgotPassword/:token']);
    }
    this.token=this.route.snapshot.paramMap.get("token");

    this.userservice.updatePassword(this.forgotPasswordForm,this.token).subscribe((response: any) => {

      this.route2.navigate(['/login']);
      this.matSnackBar.open('Your Account updated SuccessFully','ok',{duration:4000});
       },

       (error: any) => {

        this.matSnackBar.open('Bad Credentials','ok',{duration:4000});
        console.log(error)
      });
    }

 

}
