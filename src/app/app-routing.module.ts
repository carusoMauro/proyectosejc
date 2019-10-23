import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './containers/home-layout/home-layout.component';
import { ContactLayoutComponent } from './containers/contact-layout/contact-layout.component';
import { PortfolioLayoutComponent } from './containers/portfolio-layout/portfolio-layout.component';
import { ServicesLayoutComponent } from './containers/services-layout/services-layout.component';
import { BlogLayoutComponent } from './containers/blog-layout/blog-layout.component';

const routes: Routes = [
	{path: 'home', component: HomeLayoutComponent},
	{path: '', component: HomeLayoutComponent},
	{path: 'contacto', component: ContactLayoutComponent},
	{path: 'obras', component: BlogLayoutComponent},
	{path: 'servicios', component: ServicesLayoutComponent},
	{path: 'faqs', component: PortfolioLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
