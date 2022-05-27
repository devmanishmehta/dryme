import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHeaderComponent } from './Components/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './Components/admin/admin-footer/admin-footer.component';
import { AdminHomeComponent } from './Components/admin/admin-home/admin-home.component';
import { AdminAboutComponent } from './Components/admin/admin-about/admin-about.component';
import { AdminServicesComponent } from './Components/admin/admin-services/admin-services.component';
import { AdminPricingComponent } from './Components/admin/admin-pricing/admin-pricing.component';
import { AdminContactComponent } from './Components/admin/admin-contact/admin-contact.component';
import { BlogGridComponent } from './Components/admin/adminPages/blog-grid/blog-grid.component';
import { BlogDetailComponent } from './Components/admin/adminPages/blog-detail/blog-detail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminHomeComponent,
    AdminAboutComponent,
    AdminServicesComponent,
    AdminPricingComponent,
    AdminContactComponent,
    BlogGridComponent,
    BlogDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
