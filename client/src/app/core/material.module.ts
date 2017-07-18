// /* Module for managing material component module imports:
// check "Step 3: Import the component modules" https://material.angular.io/guide/getting-started */


// By the warnings I'm getting from webstorm, it looks like I might be missing TypeScript typings

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MdIconModule,
  MdSidenavModule,
  MdButtonModule,
  MdToolbarModule,
  MdCardModule,
  MdSliderModule,
  MdListModule,
  MdProgressBarModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

// There's a built in MaterialModule in Angular Material. But I think that it loads all the modules at once.
// Check to see if they are lazy loaded and if it is actually ok to use that module instead of this one
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdIconModule,
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdCardModule,
    MdSliderModule,
    MdProgressBarModule,
    MdListModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MdIconModule,
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdCardModule,
    MdSliderModule,
    MdProgressBarModule,
    MdListModule,
    FlexLayoutModule
  ]
})
export class MaterialModule {
}
