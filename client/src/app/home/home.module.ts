import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';

import {IntroductionComponent} from "./introduction/introduction.component";
import {MusicComponent} from "./music/music.component";
import {BiographyComponent} from "./biography/biography.component";
import {TranscriptionComponent} from "./transcription/transcription.component";
import {HomeComponent} from "./home.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent,
    IntroductionComponent,
    MusicComponent,
    BiographyComponent,
    TranscriptionComponent
  ]
})
export class HomeModule {
}
