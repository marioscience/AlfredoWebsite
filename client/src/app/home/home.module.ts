///* This is called a feature module. You better remember that because your life depends on it */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {FrameworkModule} from "../framework/framework.module";

import {MaterialModule} from "../core/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";

import {IntroductionComponent} from "./introduction/introduction.component";
import {MusicComponent} from "./music/music.component";
import {BiographyComponent} from "./biography/biography.component";
import {TranscriptionComponent} from "./transcription/transcription.component";
import {TranscriptionItemComponent} from "./transcription/transcription-item.component";
import {HomeComponent} from "./home.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    FrameworkModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent,
    IntroductionComponent,
    MusicComponent,
    BiographyComponent,
    TranscriptionComponent,
    TranscriptionItemComponent
  ]
})
export class HomeModule {
}
