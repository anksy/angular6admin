import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes, routeComponents } from "./app-routing-list";

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  declarations: [routeComponents]
})
export class AppRoutingModule { }
