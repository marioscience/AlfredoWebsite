import {NgModule} from "@angular/core";

import {AdminComponent} from "./admin.component";
import {MaterialModule} from "../core/material.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";

import {IntroductionEditComponent} from "./introduction/introduction-edit.component";
import {MusicEditComponent} from "./music/music-edit.component";
import {TranscriptionEditComponent} from "./transcription/transcription-edit.component";
import {BiographyEditComponent} from "./biography/biography-edit.component";

import {AdminRoutingModule} from "./admin-routing.module";

import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

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
    LoginComponent,
    IntroductionEditComponent,
    MusicEditComponent,
    TranscriptionEditComponent,
    BiographyEditComponent

  ],
  exports: [
    AdminComponent,
    AdminRoutingModule
  ]
})
export class AdminModule {
}
