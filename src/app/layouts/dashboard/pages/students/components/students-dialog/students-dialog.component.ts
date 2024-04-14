import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IStudents } from '../../models/students_iface';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrls: ['./students-dialog.component.scss']
})
export class StudentsDialogComponent {
  studentsForm: FormGroup;

constructor(private formBuilder: FormBuilder,
            private matDialogRef: MatDialogRef<StudentsDialogComponent>,
            @Inject(MAT_DIALOG_DATA) private editingUser?: IStudents){
  //console.log(editingUser);              
  this.studentsForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'), Validators.maxLength(10)]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z-9._%+-]+@[a-zA-Z-9._%+-]+.[a-zA-Z]{2,}')]],
    house: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'), Validators.maxLength(10)]],
    role: ['USER',[Validators.required]]
  }); 
  if (editingUser){
    this.studentsForm.patchValue(editingUser);
  }
}

get firstNameControl() {
  return this.studentsForm.get('firstName');
}

get lastNameControl() {
  return this.studentsForm.get('lastName');
}

get houseControl() {
  return this.studentsForm.get('house');
}

onSave(): void{
  if(this.studentsForm.invalid){ // Invalid form
    this.studentsForm.markAllAsTouched();
  }else{ // Valid form
    this.matDialogRef.close(this.studentsForm.value);
  }
}

}
