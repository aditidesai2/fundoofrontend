import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

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

    localStorage.clear();


    this.router.navigateByUrl('/login');

  
    
  }

}
