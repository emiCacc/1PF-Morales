import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { IStudents } from 'src/app/layouts/dashboard/pages/students/models/students_iface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private studentsSubject: BehaviorSubject<IStudents[]> = new BehaviorSubject<IStudents[]>([]);
  students$: Observable<IStudents[]> = this.studentsSubject.asObservable();
  constructor() { }

  setAsignatures(students: IStudents[]): void {
    this.studentsSubject.next(students);
  }
}
