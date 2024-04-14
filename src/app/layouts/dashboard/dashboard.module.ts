import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

//material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StudentsModule } from './pages/students/students.module';
import { PipesYDirectivasModule } from './pages/pipes-y-directivas/pipes-y-directivas.module';
import { AsignaturesModule } from './pages/asignatures/asignatures.module';
import { TeachersModule } from './pages/teachers/teachers.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    StudentsModule,
    PipesYDirectivasModule,
    AsignaturesModule,
    TeachersModule,
    SharedModule
  ],
  exports:[DashboardComponent],
})
export class DashboardModule { }
