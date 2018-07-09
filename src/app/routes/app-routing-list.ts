import { Routes } from "@angular/router";
export const routeComponents = [];

/**
 * importing lazy modules
 */

export const routes: Routes = [
  {
    "path" : "",
    "redirectTo": "login",
    "pathMatch" : "full"
  },
  {
    "path": "login",
    "loadChildren": "../login/login.module#LoginModule"
  },
  {
    "path": "dashboard",
    "loadChildren": "../dashboard/dashboard.module#DashboardModule"
  }
];
