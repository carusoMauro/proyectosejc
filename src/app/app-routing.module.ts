import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './containers/home-layout/home-layout.component';
import { ContactLayoutComponent } from './containers/contact-layout/contact-layout.component';
import { PortfolioLayoutComponent } from './containers/portfolio-layout/portfolio-layout.component';
import { ServicesLayoutComponent } from './containers/services-layout/services-layout.component';
const routes: Routes = [
	{path: 'home', component: HomeLayoutComponent},
	{path: 'contact', component: ContactLayoutComponent},
	{path: 'portfolio', component: PortfolioLayoutComponent},
	{path: 'services', component: ServicesLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
