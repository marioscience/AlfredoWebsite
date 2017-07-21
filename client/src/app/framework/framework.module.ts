import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MaterialModule} from "../core/material.module";
import {VideoPlayerComponent} from "./videoplayer/videoplayer.component";
import {AudioplayerComponent} from "./audioplayer/audioplayer.component";
import {ContentSliderComponent} from "./contentslider/content-slider.component";
import {MultipleRowPipe} from "./multiple-row.pipe";

import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    VideoPlayerComponent,
    AudioplayerComponent,
    ContentSliderComponent,
    MultipleRowPipe
  ],
  exports: [
    MaterialModule,
    VideoPlayerComponent,
    AudioplayerComponent,
    ContentSliderComponent,
    MultipleRowPipe
  ]
})
export class FrameworkModule {
}
