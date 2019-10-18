import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './containers/home-layout/home-layout.component';
import { ContactLayoutComponent } from './containers/contact-layout/contact-layout.component';
import { PortfolioLayoutComponent } from './containers/portfolio-layout/portfolio-layout.component';
import { ServicesLayoutComponent } from './containers/services-layout/services-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    ContactLayoutComponent,
    PortfolioLayoutComponent,
    ServicesLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
