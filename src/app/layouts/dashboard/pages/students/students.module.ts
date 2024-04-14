import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './../students/students.component';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';

import { PipesYDirectivasModule } from '../pipes-y-directivas/pipes-y-directivas.module';
import { PipesYDirectivasRoutingModule } from '../pipes-y-directivas/pipes-y-directivas-routing.module';
import { PipesYDirectivasComponent } from '../pipes-y-directivas/pipes-y-directivas.component';
import { FullnamePipe } from 'src/app/shared/pipes/full-name.pipe';
import { FontSizeChangeDirective } from 'src/app/shared/directives/font-size-change.directive';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDialogComponent,
    FullnamePipe,
    FontSizeChangeDirective
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    PipesYDirectivasModule
  ],
  exports: [
    StudentsComponent
  ],
})
export class StudentsModule { }
