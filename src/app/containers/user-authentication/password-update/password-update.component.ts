import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../../../services/userservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.scss']
})
export class PasswordUpdateComponent implements OnInit {

  emailForm: FormGroup;
  loading = false;

  constructor(private userservice: UserserviceService, private router: Router,private matSnackBar:MatSnackBar) { }

  ngOnInit() {

    this.emailForm = new FormGroup({
        username: new FormControl('', [Validators.required])

  });
}

  onSubmit()
   {
    console.log(this.emailForm.value);

    this.matSnackBar.open('Reset Password Link Sent to Your Mail!!','ok',{duration:5000});
    this.userservice.sendEmail(this.emailForm.value).subscribe((response: any) => {

      console.log(response.message);
      console.log(response.statusCode);
      if (response.statusCode === 200) {
        this.router.navigate(['/notifyUser']);
      } else {
        this.router.navigate(['/passwordupdate']);
      }
    },
      error => {
        this.loading = false;
      }
    );

  }


}
