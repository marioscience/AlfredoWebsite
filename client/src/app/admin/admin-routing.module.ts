import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AdminComponent} from "./admin.component";

import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

let routes: Routes = [
  {
    path: "admin",
    component: AdminComponent
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
  ]
})
export class AdminRoutingModule {
}
