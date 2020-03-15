import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "../app/containers/user-authentication/login/login.component";
import { RegisterComponent } from "../app/containers/user-authentication/register/register.component";
import { PasswordUpdateComponent } from "../app/containers/user-authentication/password-update/password-update.component";
import { UserActivateComponent } from "../app/containers/user-authentication/user-activate/user-activate.component";
import { ForgotPasswordComponent } from "../app/containers/user-authentication/forgot-password/forgot-password.component";
import { DashboardComponent } from "../app/containers/dashboard/dashboard.component";
import { NoteComponent } from "../app/containers/note/note.component";
import { ReminderNotesComponent } from "../app/containers/dashboard/reminder-notes/reminder-notes.component";
import { ArchivedNotesComponent } from "../app/containers/dashboard/archived-notes/archived-notes.component";
import { TrashedNotesComponent } from "../app/containers/dashboard/trashed-notes/trashed-notes.component";
const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "passwordupdate", component: PasswordUpdateComponent },
  { path: "user/verification/:token", component: UserActivateComponent },
  { path: "user/forgotPassword/:token", component: ForgotPasswordComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "/dashboard/notes", pathMatch: "full" },
      { path: "notes", component: NoteComponent },
      { path: "reminder", component: ReminderNotesComponent },
      { path: "archive", component: ArchivedNotesComponent },
      { path: "trash", component: TrashedNotesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
