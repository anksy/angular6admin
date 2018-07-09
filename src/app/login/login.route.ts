import { Routes } from "@angular/router";

import { LoginComponent } from "./component/login.component";

export const routeComponents = [LoginComponent];

export const routes: Routes = [
    { path: "", component: LoginComponent }
];