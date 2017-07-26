import {NgModule} from "@angular/core";

import {MaterialModule} from "./material.module";
import {FrameworkModule} from "../framework/framework.module";
import {LoggerService} from "./logger.service";

import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";

import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    MaterialModule,
    RouterModule,
    FrameworkModule
  ],
  exports: [
    MaterialModule,
    NavbarComponent,
    FooterComponent
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  providers: [LoggerService]
})
export class CoreModule {
}
