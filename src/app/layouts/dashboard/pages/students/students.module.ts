import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './../students/students.component';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';

import { FullnamePipe } from 'src/app/shared/pipes/full-name.pipe';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDialogComponent,
    FullnamePipe
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
