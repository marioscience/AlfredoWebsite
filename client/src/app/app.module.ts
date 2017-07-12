import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';

import {IntroductionService} from "./services/introduction.service";

import {HomeComponent} from "./home/home.component";
import {IntroductionComponent} from "./home/introduction/introduction.component";
import {MusicComponent} from "./home/music/music.component";
import {TranscriptionComponent} from "./home/transcription/transcription.component";
import {BiographyComponent} from "./home/biography/biography.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroductionComponent,
    MusicComponent,
    TranscriptionComponent,
    BiographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [IntroductionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
