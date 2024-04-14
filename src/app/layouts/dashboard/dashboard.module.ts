import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

//material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { StudentsModule } from './pages/students/students.module';
import { PipesYDirectivasModule } from './pages/pipes-y-directivas/pipes-y-directivas.module';
import { ProductsModule } from './pages/products/products.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    StudentsModule,
    PipesYDirectivasModule,
    ProductsModule
  ],
  exports:[DashboardComponent],
})
export class DashboardModule { }
