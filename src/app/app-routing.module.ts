import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/containers/user-authentication/login/login.component';
import {RegisterComponent} from '../app/containers/user-authentication/register/register.component'
import {PasswordUpdateComponent} from '../app/containers/user-authentication/password-update/password-update.component'
import {UserActivateComponent} from '../app/containers/user-authentication/user-activate/user-activate.component'

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'passwordupdate', component: PasswordUpdateComponent },
  { path: 'user/verification/:token', component: UserActivateComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
