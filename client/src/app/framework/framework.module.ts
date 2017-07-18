import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MaterialModule} from "../core/material.module";
import {VideoPlayerComponent} from "./videoplayer/videoplayer.component";
import {AudioplayerComponent} from "./audioplayer/audioplayer.component";

import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    VideoPlayerComponent,
    AudioplayerComponent
  ],
  exports: [
    MaterialModule,
    VideoPlayerComponent,
    AudioplayerComponent
  ]
})
export class FrameworkModule {
}
