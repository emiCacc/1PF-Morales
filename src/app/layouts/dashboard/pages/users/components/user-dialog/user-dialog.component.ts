import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IStudents } from '../../models';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {
  userForm: FormGroup;

constructor(private formBuilder: FormBuilder,
            private matDialogRef: MatDialogRef<UserDialogComponent>,
            @Inject(MAT_DIALOG_DATA) private editingUser?: IStudents){
  //console.log(editingUser);              
  this.userForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'), Validators.maxLength(5)]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z-9._%+-]+@[a-zA-Z-9._%+-]+.[a-zA-Z]{2,}')]],
    house: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'), Validators.maxLength(10)]],
    role: ['USER',[Validators.required]]
  }); 
  if (editingUser){
    this.userForm.patchValue(editingUser);
  }
}

get firstNameControl() {
  return this.userForm.get('firstName');
}

get lastNameControl() {
  return this.userForm.get('lastName');
}

get houseControl() {
  return this.userForm.get('house');
}

onSave(): void{
  if(this.userForm.invalid){ // Invalid form
    this.userForm.markAllAsTouched();
  }else{ // Valid form
    this.matDialogRef.close(this.userForm.value);
  }
}

}
