import {NgModule} from "@angular/core";

import {MaterialModule} from "./material.module";
import {LoggerService} from "./logger.service";

@NgModule({
  imports: [MaterialModule],
  exports: [MaterialModule],
  declarations: [],
  providers: [LoggerService]
})
export class CoreModule {
}
