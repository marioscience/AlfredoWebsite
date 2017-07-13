import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./home/home.component";
// import { AdminComponent } from "./admin/admin.component";

let routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  { // Add 404 page if app grows. Admin page still missing
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

