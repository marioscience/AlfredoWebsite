import { NgModule } from '@angular/core';

import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeModule} from "./home/home.module";
import {AdminModule} from "./admin/admin.module";
import {ConcertsModule} from "./concerts/concerts.module";


import {CoreModule} from "./core/core.module";

import {IntroductionService} from "./services/introduction.service";
import {MusicService} from "./services/music.service";
import {BiographyService} from "./services/biography.service";
import {TranscriptionService} from "./services/transcription.service";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule,
    AdminModule,
    ConcertsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    IntroductionService,
    MusicService,
    BiographyService,
    TranscriptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
