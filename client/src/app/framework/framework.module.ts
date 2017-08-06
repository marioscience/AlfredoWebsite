import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MaterialModule} from "../core/material.module";
import {VideoPlayerComponent} from "./videoplayer/videoplayer.component";
import {AudioplayerComponent} from "./audioplayer/audioplayer.component";
import {ContentSliderComponent} from "./contentslider/content-slider.component";
import {MultipleRowPipe} from "./multiple-row.pipe";

import {SectionScrollDirective} from "./sectionscroll/section-scroll.directive";
import {SectionScrollService} from "./sectionscroll/section-scroll.service";

import {ConcertTourboxComponent} from "./concerttourbox/concerttourbox.component";
import {ConcertTourboxService} from "./concerttourbox/concerttourbox.service";

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
    MultipleRowPipe,
    SectionScrollDirective,
    ConcertTourboxComponent
  ],
  exports: [
    MaterialModule,
    VideoPlayerComponent,
    AudioplayerComponent,
    ContentSliderComponent,
    MultipleRowPipe,
    SectionScrollDirective,
    ConcertTourboxComponent
  ],
  providers: [
    SectionScrollService,
    ConcertTourboxService
  ]
})
export class FrameworkModule {
}
