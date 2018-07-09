import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { routeComponents, routes } from "./dashboard.route";
/**
 * Shared Module
 */
import { SharedMaterialModule } from "../shared/modules/material/material.module";

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedMaterialModule
  ],
  declarations: [routeComponents]
})
export class DashboardModule { }
