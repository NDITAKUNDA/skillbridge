import { PricingComponent } from './pages/pricing/pricing.component';
import { AboutComponent } from './pages/about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Welcome to Skill Bridge, Elevate yourself today'
  },
  {
    path: 'courses',
    component: CoursesComponent,
    title: 'Discover our wide range of Courses, Elevate yourself today'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Get to know us more, Elevate yourself today'
  },
  {
    path: 'pricing',
    component: PricingComponent,
    title: 'Invest today, Celebrate Tomorrow, Elevate yourself today'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: "Welcome back, Let's get to learning!"
  },
  {
    path: 'signup',
    component: LoginComponent,
    title: "Welcome to Skillbridge, Let's get to learning!"
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: "Got something on your mind, Get in touch and let us assist you!"
  },
  {
    path: '**',
    component: HomeComponent,
    title: 'Welcome to Skill Bridge, Elevate yourself today'
  }
];
