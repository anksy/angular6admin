import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

/**
 * importing components
 */
import { routeComponents, routes } from "./login.route";


@NgModule({
  declarations: [routeComponents],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class LoginModule { }
