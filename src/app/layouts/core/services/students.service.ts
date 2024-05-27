import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CreateStudentPayload, IStudents } from 'src/app/layouts/dashboard/pages/students/models/students_iface';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private studentsSubject: BehaviorSubject<IStudents[]> = new BehaviorSubject<IStudents[]>([]);
  students$: Observable<IStudents[]> = this.studentsSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<IStudents[]> {
    return this.httpClient.get<IStudents[]>(environment.baseAPIURL + '/students').pipe(
      map((students: IStudents[]) => {
        this.studentsSubject.next(students);
        return students;
      })
    );
  }

  setAsignatures(students: IStudents[]): void {
    this.studentsSubject.next(students);
  }

  createStudent(payload: CreateStudentPayload): Observable<IStudents> {
    return this.httpClient.post<IStudents>(`${environment.baseAPIURL}/students`, payload);
  }

  deleteStudent(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.baseAPIURL}/students/${id}`);
  }
}