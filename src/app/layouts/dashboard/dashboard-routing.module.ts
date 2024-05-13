import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { authGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'students',
    canActivate: [authGuard], 
    loadChildren: () =>
      import('./pages/students/students.module').then((m) => m.StudentsModule),
  },
  {
    path: 'teachers',
    canActivate: [authGuard], 
    loadChildren: () =>
      import('./pages/teachers/teachers.module').then((m) => m.TeachersModule),
  },
  {
    path: 'asignatures',
    canActivate: [authGuard], 
    loadChildren: () =>
      import('./pages/asignatures/asignatures.module').then((m) => m.AsignaturesModule),
  },    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}