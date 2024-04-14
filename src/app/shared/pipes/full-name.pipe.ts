import { Pipe, PipeTransform } from '@angular/core';
import { IStudents } from '../../layouts/dashboard/pages/students/models/students_iface';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {
  transform(student: IStudents): string {
    return `${student.firstName} ${student.lastName}`;
  }
}
