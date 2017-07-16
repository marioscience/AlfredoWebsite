import {NgModule} from "@angular/core";

import {MaterialModule} from "../core/material.module";
import {VideoPlayerComponent} from "./videoplayer/videoplayer.component";

@NgModule({
  imports: [
    MaterialModule
  ],
  declarations: [
    VideoPlayerComponent
  ],
  exports: [
    MaterialModule,
    VideoPlayerComponent
  ]
})
export class FrameworkModule {
}
