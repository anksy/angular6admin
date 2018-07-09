import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';

/**
 * importing modules
 */
import { AppRoutingModule } from "./routes/app-routing.module";
import { SidebarComponent } from './elems/sidebar/sidebar.component';
import { FooterComponent } from './elems/footer/footer.component';
import { NavbarComponent } from "./elems/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
