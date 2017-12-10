import {NgModule} from "@angular/core";

import {AdminComponent} from "./admin.component";
import {MaterialModule} from "../core/material.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";

import {AdminRoutingModule} from "./admin-routing.module";

import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";


import {AuthService} from "../services/auth.service";
import {AuthGuard} from "./auth-guard.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    RegisterComponent,
    LoginComponent
  ],
  exports: [
    AdminComponent,
    AdminRoutingModule
  ]
})
export class AdminModule {
}
