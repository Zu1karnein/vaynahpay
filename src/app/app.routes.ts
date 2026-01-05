import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Page404Component } from './pages/page404/page404.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { Attendanceomponent } from './pages/attendance/attendance.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'services', component: Attendanceomponent },
  { path: '**', component: Page404Component },
];
