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
  }
];
