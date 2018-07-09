import { Routes } from "@angular/router";
import { DashboardComponent } from "./component/dashboard.component";

export const routeComponents = [DashboardComponent];
export const routes : Routes = [
    {
        "path" : "",
        "component" : DashboardComponent
    }
];
