import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../../models';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {
  userForm: FormGroup;

constructor(private formBuilder: FormBuilder,
            private matDialogRef: MatDialogRef<UserDialogComponent>,
            @Inject(MAT_DIALOG_DATA) private editingUser?: IUser){
  //console.log(editingUser);              
  this.userForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z-9._%+-]+@[a-zA-Z-9._%+-]+.[a-zA-Z]{2,}')]],
    role: ['USER',[Validators.required]]
  });

  if (editingUser){
    this.userForm.patchValue(editingUser); // El patchValue lo que hace es pisar el valor del form con el que le indiquemos.
  }
}

onSave(): void{
  if(this.userForm.invalid){ //Cuando el form es INVALIDO
    this.userForm.markAllAsTouched();
  }else{ //Cuando el form es VALIDO
    this.matDialogRef.close(this.userForm.value);
  }
}

}
