import {NgModule} from "@angular/core";

import {ConcertsComponent} from "./concerts.component";
import {HomeModule} from "../home/home.module";

import {FrameworkModule} from "../framework/framework.module";


@NgModule({
  imports: [
    HomeModule,
    FrameworkModule
  ],
  declarations: [
    ConcertsComponent
  ]
})
export class ConcertsModule {
}
