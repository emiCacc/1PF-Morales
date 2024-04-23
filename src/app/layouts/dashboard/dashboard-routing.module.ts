import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', 
    children: [
      { path:'students', loadChildren: () => import('./pages/students/students.module').then((m) => m.StudentsModule) },
      { path:'teachers', loadChildren: () => import('./pages/teachers/teachers.module').then((m) => m.TeachersModule) },
      { path:'asignatures', loadChildren: () => import('./pages/asignatures/asignatures.module').then((m) => m.AsignaturesModule) },
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
