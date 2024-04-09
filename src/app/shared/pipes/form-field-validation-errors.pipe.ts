import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formFieldValidationErrors'
})
export class FormFieldValidationErrorsPipe implements PipeTransform {

  transform(
    value: ValidationErrors | undefined | null, 
    ...args: unknown[]): unknown {
    console.log(value);

    if(value){
      let messages: string[] = [];

      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          const errorDetail = value[key];
          console.log(key);
          if (key === 'required') messages.push('Este campo es requerido.');
          if (key === 'pattern') messages.push('No cumple con el formato requerido.');
          if (key === 'maxlength') messages.push(`No puede tener mas de ${errorDetail.required} caracteres.`);
          if (key === 'minlenght') messages.push(`No puede tener menos de ${errorDetail.required} caracteres.`);
        }
      }
      return messages.join('. ');
    }
      return null;
  }

}
