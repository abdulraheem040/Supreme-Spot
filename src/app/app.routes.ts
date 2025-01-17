import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { OpenhourComponentComponent } from './openhour-component/openhour-component.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { ContactUsComponentComponent } from './contact-us-component/contact-us-component.component';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

export const routes: Routes = [
    {path:'Home', component: HomeComponentComponent},
    {path:'Home/OpeningHours', component: OpenhourComponentComponent},
    {path:'Home/Menu&Pricing', component: MenuComponentComponent},
    {path:'Home/ContactUs', component: ContactUsComponentComponent},
    {path:'Home/AboutUs', component: AboutUsComponentComponent},
    {path:'Home/PrivacyPolicy', component: FooterComponentComponent},
    {path:'**', component: HomeComponentComponent},
];
