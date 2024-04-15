import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualificationsRoutingModule } from './qualifications-routing.module';
import { QualificationsComponent } from './qualifications.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AsignaturesModule } from '../../asignatures.module';


@NgModule({
  declarations: [QualificationsComponent],
  imports: [
    CommonModule,
    QualificationsRoutingModule,
    SharedModule
  ],
  exports: [QualificationsComponent]
})
export class QualificationsModule { }
