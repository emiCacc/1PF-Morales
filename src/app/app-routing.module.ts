import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { AsignaturesComponent } from './layouts/dashboard/pages/asignatures/asignatures.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo: 'dashboard/students' },
  { path:'auth', component: AuthComponent },
  { path:'dashboard', component: DashboardComponent, loadChildren: () => import('./layouts/dashboard/dashboard.module').then((m) => m.DashboardModule) },
  { path:'**', redirectTo: '/dashboard/students' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
