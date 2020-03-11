import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userData: any = " ";
  icon: String = 'dashboard';

  constructor(    private router: Router,
   
    private matSnackBar: MatSnackBar
) { }

  ngOnInit() {
 
  }
  logout() {
    console.log("signing out => clearing token");


    this.matSnackBar.open(" sucessfully logged out", "ok", {
      duration: 5000
    });
    this.router.navigateByUrl('/login');
  
    localStorage.clear();
  }

}
