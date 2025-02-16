import { PricingComponent } from './pages/pricing/pricing.component';
import { AboutComponent } from './pages/about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';

export const routes: Routes = [
  {
    path: '',
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
  }
];
