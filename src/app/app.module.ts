import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from '../app/containers/user-authentication/login/login.component';
import { RegisterComponent } from '../app/containers/user-authentication/register/register.component';
import { PasswordUpdateComponent } from './containers/user-authentication/password-update/password-update.component';
import { UserActivateComponent } from './containers/user-authentication/user-activate/user-activate.component';
import { ForgotPasswordComponent } from './containers/user-authentication/forgot-password/forgot-password.component';
import { DashboardComponent } from '../app/containers/dashboard/dashboard.component';
import { SidenavComponent } from './containers/sidenav/sidenav.component';
import { ToolbarComponent } from './containers/toolbar/toolbar.component';
import { NoteComponent } from './containers/note/note.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PasswordUpdateComponent,
    UserActivateComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    SidenavComponent,
    ToolbarComponent,
    
    NoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
