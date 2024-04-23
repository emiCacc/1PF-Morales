import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturesComponent } from './asignatures.component';

const routes: Routes = [{ path:'', component: AsignaturesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignaturesRoutingModule { }
