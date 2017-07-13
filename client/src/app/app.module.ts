import { NgModule } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {MdButtonModule, MdCheckboxModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import {HomeModule} from "./home/home.module";

import {IntroductionService} from "./services/introduction.service";

import {MusicService} from "./services/music.service";

import {CoreModule} from "./core/core.module";
import {BiographyService} from "./services/biography.service";
import {TranscriptionService} from "./services/transcription.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    AppRoutingModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule // Might be more convenient to create a module for all the UI modules :|
  ],
  providers: [
    IntroductionService,
    MusicService,
    BiographyService,
    TranscriptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
