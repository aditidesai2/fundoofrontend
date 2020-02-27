import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/containers/user-authentication/login/login.component';
import {RegisterComponent} from '../app/containers/user-authentication/register/register.component'


const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
