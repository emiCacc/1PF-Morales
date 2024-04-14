import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { AsignaturesRoutingModule } from './asignatures-routing.module';
import { AsignaturesComponent } from './asignatures.component';
import { AsignaturesDialogComponent } from './components/asignatures-dialog/asignatures-dialog.component';

import { PipesYDirectivasModule } from '../pipes-y-directivas/pipes-y-directivas.module';
import { PipesYDirectivasRoutingModule } from '../pipes-y-directivas/pipes-y-directivas-routing.module';
import { PipesYDirectivasComponent } from '../pipes-y-directivas/pipes-y-directivas.component';

@NgModule({
  declarations: [
    AsignaturesComponent,
    AsignaturesDialogComponent
  ],
  imports: [
    CommonModule,
    AsignaturesRoutingModule,
    SharedModule,
    PipesYDirectivasModule
  ],
  exports: [
    AsignaturesComponent
  ]
})
export class AsignaturesModule { }
