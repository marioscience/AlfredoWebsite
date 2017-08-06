import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./home/home.component";

import {AdminComponent} from "./admin/admin.component";
import {ConcertsComponent} from "./concerts/concerts.component";

import {HomeResolver} from "./home/home-resolver.service";

let routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    resolve: {
      resolved: HomeResolver
    }
  },
  {
    path: "concerts",
    component: ConcertsComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  { // Add 404 page if app grows. Admin page still missing
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HomeResolver]
})
export class AppRoutingModule {
}

