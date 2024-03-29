import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './containers/home-layout/home-layout.component';
import { ContactLayoutComponent } from './containers/contact-layout/contact-layout.component';
import { PortfolioLayoutComponent } from './containers/portfolio-layout/portfolio-layout.component';
import { ServicesLayoutComponent } from './containers/services-layout/services-layout.component';
import { BlogLayoutComponent } from './containers/blog-layout/blog-layout.component';
import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    ContactLayoutComponent,
    PortfolioLayoutComponent,
    ServicesLayoutComponent,
    BlogLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
