import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AdminComponent} from "./admin.component";

import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

import {AuthGuard} from "./auth-guard.service";
import {AuthService} from "../services/auth.service";

let routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "admin/login",
    component: LoginComponent,
  },
  {
    path: "admin/register",
    component: RegisterComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AdminRoutingModule {
}
