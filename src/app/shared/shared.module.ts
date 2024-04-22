import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormFieldValidationErrorsPipe } from './pipes/form-field-validation-errors.pipe';
import {MatListModule} from '@angular/material/list';
import { FontSizeChangeDirective } from './directives/font-size-change.directive';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    FormFieldValidationErrorsPipe,
    FontSizeChangeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormFieldValidationErrorsPipe,
    MatListModule,
    FontSizeChangeDirective,
    MatTooltipModule,
    MatGridListModule
  ]
})
export class SharedModule { }
