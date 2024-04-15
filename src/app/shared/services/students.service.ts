import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { IStudents } from 'src/app/layouts/dashboard/pages/students/models/students_iface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private asignaturesSubject: BehaviorSubject<IStudents[]> = new BehaviorSubject<IStudents[]>([]);
  asignatures$: Observable<IStudents[]> = this.asignaturesSubject.asObservable();
  constructor() { }

  setAsignatures(asignatures: IStudents[]): void {
    this.asignaturesSubject.next(asignatures);
  }
}
