import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {
  userForm: FormGroup;

constructor(private formBuilder: FormBuilder,
            private matDialogRef: MatDialogRef<UserDialogComponent>){
  this.userForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z-9._%+-]+@[a-zA-Z-9._%+-]+.[a-zA-Z]{2,}')]],
  })
}

onSave(): void{
  if(this.userForm.invalid){ //Cuando el form es INVALIDO
    this.userForm.markAllAsTouched();
  }else{ //Cuando el form es VALIDO
    this.matDialogRef.close(this.userForm.value);
  }
}

}
