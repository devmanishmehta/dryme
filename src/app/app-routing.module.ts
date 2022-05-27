import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAboutComponent } from './Components/admin/admin-about/admin-about.component';
import { AdminContactComponent } from './Components/admin/admin-contact/admin-contact.component';
import { AdminHomeComponent } from './Components/admin/admin-home/admin-home.component';
import { AdminPricingComponent } from './Components/admin/admin-pricing/admin-pricing.component';
import { AdminServicesComponent } from './Components/admin/admin-services/admin-services.component';
import { BlogDetailComponent } from './Components/admin/adminPages/blog-detail/blog-detail.component';
import { BlogGridComponent } from './Components/admin/adminPages/blog-grid/blog-grid.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:AdminHomeComponent
  },
  {
    path: 'about',
    component: AdminAboutComponent
  },
  {
    path: 'services',
    component: AdminServicesComponent
  },
  {
    path: 'pricing',
    component: AdminPricingComponent
  },
  {
    path: 'contact',
    component: AdminContactComponent
  },
  {
    path: 'blogdetail',
    component: BlogDetailComponent
  },
  {
    path: 'bloggrid',
    component: BlogGridComponent
  },
  // { path: '', component: AdminContactComponent},
  // { path: 'second-component', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
