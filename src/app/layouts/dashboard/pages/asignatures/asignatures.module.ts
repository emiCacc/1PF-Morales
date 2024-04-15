import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { AsignaturesRoutingModule } from './asignatures-routing.module';
import { AsignaturesComponent } from './asignatures.component';
import { AsignaturesDialogComponent } from './components/asignatures-dialog/asignatures-dialog.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';

@NgModule({
  declarations: [
    AsignaturesComponent,
    AsignaturesDialogComponent,
    QualificationsComponent,
  ],
  imports: [
    CommonModule,
    AsignaturesRoutingModule,
    SharedModule
  ],
  exports: [
    AsignaturesComponent,
    QualificationsComponent
  ]
})
export class AsignaturesModule { }
