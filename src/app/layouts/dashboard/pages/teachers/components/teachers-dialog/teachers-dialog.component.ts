import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITeachers } from '../../models/teachers_iface';

@Component({
  selector: 'app-teachers-dialog',
  templateUrl: './teachers-dialog.component.html',
  styleUrls: ['./teachers-dialog.component.scss']
})
export class TeachersDialogComponent {
  teachersForm: FormGroup;
  mode: 'add' | 'edit';

  constructor(private formBuilder: FormBuilder,
              private matDialogRef: MatDialogRef<TeachersDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private editingTeacher?: ITeachers){
                this.mode = editingTeacher ? 'edit' : 'add';         
                
              this.teachersForm = this.formBuilder.group({
                id: [editingTeacher?.id || ''], 
                name: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$')]],
                lastName: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$')]],
                age: ['', [Validators.required]],
              }); 
              
            if (editingTeacher){
            this.teachersForm.patchValue(editingTeacher);
    }
  }

  get nameControl() {
    return this.teachersForm.get('asignature');
  }

  get lastNameControl() {
    return this.teachersForm.get('professor');
  }

  get ageControl() {
    return this.teachersForm.get('asignatureType');
  }

  onSave(): void{
    if(this.teachersForm.invalid){ // Invalid form
      this.teachersForm.markAllAsTouched();
    }else{ // Valid form
      this.matDialogRef.close(this.teachersForm.value);
    }
  }

}
