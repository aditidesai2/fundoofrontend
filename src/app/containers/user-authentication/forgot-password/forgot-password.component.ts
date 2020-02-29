import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import {UserserviceService} from "../../../services/userservice.service"
import { UserModel } from '../../../model/user-model';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})


export class ForgotPasswordComponent implements OnInit {
  
  forgotPasswordForm: FormGroup;
  loading = true;

  constructor(private userservice: UserserviceService,
    private router: Router) { }

  


  ngOnInit() {

    this.forgotPasswordForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required]),

        newpassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
        conpassword: new FormControl('', [Validators.required, Validators.minLength(4)]),

      }
    );
  }

  onSubmit() {
    console.log(this.forgotPasswordForm.value);
    if (this.forgotPasswordForm.invalid) {
      return this.router.navigate(['user/forgotPassword/:token']);
    }
    this.userservice.registration(this.forgotPasswordForm.value).subscribe((response: any) => {
      console.log(response.message);
      this.router.navigate(['/login']);
    },
      error => {
        this.loading = false;
      }
    );
  }

 

}
