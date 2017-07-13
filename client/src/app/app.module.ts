import { NgModule } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";

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
    HomeModule,
    AppRoutingModule,
    HttpModule
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
