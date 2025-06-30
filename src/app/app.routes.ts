import { Dashboard } from './pages/dashboard/dashboard';
import { Routes } from '@angular/router';
import { Sandbox } from './shared/sandbox/sandbox';
import { Signin } from './pages/signin/signin';
export const routes: Routes = [
  {
    path:'',
    component: Signin,
  },
  {
    path:'dashboard',
    component: Dashboard
  },
  {
    path:'sandbox',
    component: Sandbox
  },
];
