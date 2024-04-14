import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './../students/students.component';

import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesYDirectivasModule } from '../pipes-y-directivas/pipes-y-directivas.module';
import { PipesYDirectivasRoutingModule } from '../pipes-y-directivas/pipes-y-directivas-routing.module';
import { PipesYDirectivasComponent } from '../pipes-y-directivas/pipes-y-directivas.component';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDialogComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule
  ],
  exports: [
    StudentsComponent
  ],
})
export class StudentsModule { }
