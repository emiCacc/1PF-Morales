import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeachersDialogComponent } from './components/teachers-dialog/teachers-dialog.component';
import { PipesYDirectivasModule } from '../pipes-y-directivas/pipes-y-directivas.module';


@NgModule({
  declarations: [  
    TeachersComponent, TeachersDialogComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    SharedModule,
    PipesYDirectivasModule
  ],
  exports:[
    TeachersComponent
  ]
})
export class TeachersModule { }
