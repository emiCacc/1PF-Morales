import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesYDirectivasModule } from '../pipes-y-directivas/pipes-y-directivas.module';
import { PipesYDirectivasRoutingModule } from '../pipes-y-directivas/pipes-y-directivas-routing.module';
import { PipesYDirectivasComponent } from '../pipes-y-directivas/pipes-y-directivas.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserDialogComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  exports: [
    UsersComponent
  ],
})
export class UsersModule { }
